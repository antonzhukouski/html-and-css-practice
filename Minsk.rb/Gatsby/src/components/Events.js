import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Announce from './Announce'
import mapPin from '../images/map-pin.svg'

export default function Event() {
  const data = useStaticQuery (graphql`
  {
    allEventListJson {
      edges {
        node {
          eventName
          eventDate
          eventPlaceUrl
          eventPlace
          aboutEventName
          aboutEvent
        }
      }
    }
  }
  `)

  return data.allEventListJson.edges.map(({node}) => {
    const {eventName, eventDate, eventPlaceUrl, eventPlace, aboutEventName, aboutEvent} = node;
    return (
      <div className='Event' key = {eventName}>
        <div className = 'date'>
          {eventDate}
        </div>
        <div className = 'eventName'>
          {eventName}
        </div>
        <div className = 'place'>
          <div className = 'place__link'>
            <img src = {mapPin} alt =''/>
            <a href = {eventPlaceUrl}> 
              {eventPlaceUrl}
            </a>
          </div>
          <div className = 'place__address'>
            {eventPlace}
          </div>
        </div>
        <Announce />
          <div className = 'about-event'>
            <div className = 'about-event__heading'>
              {aboutEventName}
            </div>
            <div className = 'about-event__text'>
              {aboutEvent}
            </div>
          </div>
        </div>    
    )
  })
}
