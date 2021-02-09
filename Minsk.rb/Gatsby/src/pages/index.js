import React from 'react'
import Head from '../components/Head'
import Announce from '../components/Announce'
import Share from '../components/Share'
import Mediapartners from '../components/Mediapartners'
import Count from '../components/Count'
import Friends from '../components/Friends'
import Contact from '../components/Contact'
import TimePlace from '../components/TimePlace'

export const query = graphql`
  {
    allIndexAboutJson {
      edges {
        node {
          date
          name
          place
          address
          about
          description
        }
      }
    }
    allIndexScheduleJson {
      edges {
        node {
          time
          theme
          speaker
        }
      }
    }
    allEventSpeakersJson {
      edges {
        node {
          photo
          speaker
          theme
        }
      }
    }
  }
`

export default function Home({data}) {
  const aboutBeerUp = data.allIndexAboutJson.edges.map(({ node }) => {
    const { date, name, place, address, about, description} = node;
    return {
      date,
       name,
       place,
       address,
       about,
       description
    };
  });
  const schedule = data.allIndexScheduleJson.edges.map(({ node }) => {
    const { time, theme, speaker} = node;
    return {
      time,
      theme,
      speaker
    };
  });
  const speakers = data.allEventSpeakersJson.edges.map (({node}) => {
    const {photo, speaker} = node;
    return {
      photo,
      speaker
    };
});
    
  return <div>
    <Head />
    <div className='aboutEvent'>
    {aboutBeerUp.map (({date, name, place, address, about, description}) => (
        <div className='announce' key={date}>
          <div className = 'date'> {date} </div>
          <div className = 'eventName'> {name} </div>
          <div className = 'place'> 
            <div className = 'place__link'> <a href = {place}> {place} </a></div>
            <div className = 'place__address'> {address} </div>
          </div>
          <Announce />
          {/* почему-то Announce отрисовывается 2 раза, при этом если вынести его за пределы about.map всё становится ок */}
          <div className = 'about-event'>
            <div className = 'about-event__heading'> {about} </div>
            <div className = 'about-event__text'> {description} </div>
          </div>
        </div>))}
    </div>
    <Share />    
    <div className='schedule'>
      SCHEDULE_
      {schedule.map (({time, theme, speaker}) => (
        <div className='schedule__block' key={time}>
          <div className = 'schedule__block-time'> {time} </div>
          <div className = 'schedule__block-event'> {theme} </div>
          <div className = 'schedule__block-speaker'> {speaker} </div>
        </div>
      ))}
    </div>
    <div className= 'speakers'>
      <div className = 'speakers__heading'>
        Speakers
      </div>
      {speakers.map (({photo, speaker}) => (  
        <div key = {speaker}>
          <div className = 'speakers__photo'>
            <img src = {photo} alt = '' />
          </div>
          <div className = 'speaker'>
            {speaker}
          </div>
        </div>
      ))}
    </div>
    <Mediapartners />
    <TimePlace />
    <Count />
    <Friends />
    <Contact />    
  </div>
}
