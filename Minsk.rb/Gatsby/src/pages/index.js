import React from 'react'
import Head from '../components/Head'
import Announce from '../components/Announce'
import AboutEvent from '../components/AboutEvent'
import Share from '../components/Share'

export const query = graphql`
  {
    allTimetableJson {
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
  const schedule = data.allTimetableJson.edges.map(({ node }) => {
    const { time, theme, speaker} = node;
    return {
      time,
      theme,
      speaker
    };
  });
    
  return <div>
    <Head />
    <Announce />
    <AboutEvent />
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
