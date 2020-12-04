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
    <div>
    {schedule.map (({time, theme, speaker}) => (
        <div> 
          <div className = 'time'> {time} </div>
          <div className = 'theme'> {theme} </div>
          <div className = 'speaker'> {speaker} </div>
        </div>
      ))}
    </div>
    <Share />
  </div>
}
