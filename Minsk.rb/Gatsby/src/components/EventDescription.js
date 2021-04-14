import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default function EventDescription() {
  const data = useStaticQuery(graphql`
  {
    allEventListJson {
      edges {
        node {
          eventName
          eventDate
          description
          mediaPartners {
            name
            href
          }
        }
      }
    }
  }
  `)

  return data.allEventListJson.edges.map(({node}) => {
    const {eventName, eventDate, description, mediaPartners} = node;
    return <div className = 'description' key = {eventName}>
      <div className = 'description__head' >
        Minsk.rb {eventName}!
      </div>
      <div className = 'description__date'>
        {eventDate}
      </div>
      <div className = 'description__text'>
        {description}
      </div>
      <div className = 'description__mediapartners'>
        <div className = 'description__mediapartners__event'>
          MEdIA PARTNERS
        </div>
        {mediaPartners.map (item => <div className = 'description__mediapartners__list' key = {item.name}>
          <p> <a href = {item.href}> {item.name} </a> </p> 
        </div>
        )}
      </div>
    </div>
  })
}
