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
    return <div key = {schedule}>
      {schedule.map (item =>  <div className = 'schedule__block' key = {item.time}>
          <div className = 'schedule__block-time'>
            {item.time} 
          </div>
          <div className = 'schedule__block-time'>
            {item.theme}
          </div>
          <div className = 'schedule__block-speaker'>
            {item.speaker}
          </div>
        </div>  
      )}
    </div>
  })
}
