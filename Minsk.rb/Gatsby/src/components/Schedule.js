import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


export default function Schedule() {
  const data = useStaticQuery(graphql`
  {
    allEventListJson {
      edges {
        node {
          schedule {
            time
            theme
            speaker
          }
        }
      }
    }
  }
  `)

  return data.allEventListJson.edges.map(({node}) => {
    const {schedule} = node;
    return <div>
      {schedule.map(item=> <div className = 'schedule'>
        <div className = 'schedule__block'>
          <div key={item.time} className = 'schedule__block-time'>
            {item.time} 
          </div>
          <div key = {item.theme} className = 'schedule__block-time'>
            {item.theme}
          </div>
          <div key = {item.speaker} className = 'schedule__block-speaker'>
            {item.speaker}
          </div>
        </div>  
      </div>)}
    </div>
  })
}
