import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export default function SpeakersPhoto() {
  const data = useStaticQuery(graphql`
  {
    allEventListJson {
      edges {
        node {
          speakers{
            speaker
            speakerPhoto
          }
        }
      }
    }
  }
  `)

  return data.allEventListJson.edges.map(({node}) => {
    const {speakers} = node;
    return <div className = 'speakers-block' key = {speakers}>
      {speakers.map (item => <div className='speaker-block' key = {item.speaker}>
        <div className = 'speaker-block__photo'>
          <img src = {item.speakerPhoto} alt = ''/>
        </div>
        <div className = 'speaker-block__name'>
          {item.speaker}
        </div>
      </div>)}
    </div>
  })
  
}
