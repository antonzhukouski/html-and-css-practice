import React, {Component} from 'react'
import {useStaticQuery} from 'gatsby'

export default function TabsContentSpeakers() {
  const data = useStaticQuery(graphql`
    query BeerUpSpeakers { 
      allBeerUpScheduleJson {
        edges {
          node {
            speaker
            photo
            speakerTheme
          }
        }
      }
    }
  `)

  const speakers = data.allBeerUpScheduleJson.edges.map (({node}) => {
    const {speaker, speakerTheme, photo} = node;
    return {
      speaker,
      speakerTheme,
      photo
    }
  })

  return(
    <div label = 'Speakers'>
      {speakers.map (({speaker, speakerTheme, photo}) =>
        <div className = 'speaker' key = {speaker}>
          <div className = 'speaker__photo'>
            <img src = {photo} alt =''/>
          </div>
          <div className = 'speaker__text'>
            <div className = 'speaker__text-name'> 
              {speaker} 
            </div>
            <div className = 'speaker__text-theme'> 
              {speakerTheme}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
