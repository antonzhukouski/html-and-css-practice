import React from 'react'
import Head from '../components/Head'
import Announce from '../components/Announce'
import Share from '../components/Share'

export const query = graphql`
  {
    allIndexAboutJson {
      edges {
        node {
          date
          name
          place
          adress
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
  }
`

export default function Home({data}) {
  const about = data.allIndexAboutJson.edges.map(({ node }) => {
    const { date, name, place, adress, about, description} = node;
    return {
      date,
       name,
       place,
       adress,
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
    
  return <div>
    <Head />
    <div className='about'>
    {about.map (({date, name, place, adress, about, description}) => (
        <div className='announce' key={date}>
          <div className = 'date'> {date} </div>
          <div className = 'eventName'> {name} </div>
          <div className = 'place'> 
            <div className = 'place__link'> <a href = {place}> {place} </a></div>
            <div className = 'place__adress'> {adress} </div>
          </div>
          <div> <Announce /> </div> 
          {/* почему-то Announce отрисовывается 2 раза, при этом если вынести его за пределы about.map всё становится ок */}
          <div className = 'about-event'>
            <div className = 'about-event__heading'> {about} </div>
            <div className = 'about-event__text'> {description} </div>
          </div>
        </div>))}
    </div>    
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
    <Share />
  </div>
}
