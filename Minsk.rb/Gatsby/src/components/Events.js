import React, {Component} from 'react'
import {StaticQuery} from 'gatsby'
import Announce from './Announce'

class Event extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className='Event'>
          <div className = 'date'>
            {this.props.eventDate}
          </div>
          <div className = 'eventName'>
            {this.props.eventName}
          </div>
          <div className = 'place'>
            <div className = 'place__link'>
              <a href = {this.props.eventPlaceUrl}> 
                {this.props.eventPlaceUrl}
              </a>
            </div>
            <div className = 'place__address'>
              {this.props.eventPlace}
            </div>
          </div>
          <Announce />
          <div className = 'about-event'>
            <div className = 'about-event__heading'>
              {this.props.aboutEventName}
            </div>
            <div className = 'about-event__text'>
              {this.props.aboutEvent}
            </div>
          </div>
        </div>
      
    )
  }
}

function getEventsList(data) {
  const EventsArray = []
  data.allEventsListJson.edges.forEach(item =>
    EventsArray.push(
      <Event
        eventDate = {item.node.eventDate}
        eventName = {item.node.eventName}
        eventPlaceUrl = {item.node.eventPlaceUrl}
        eventPlace = {item.node.eventPlace}
        aboutEventName = {item.node.aboutEventName}
        aboutEvent = {item.node.aboutEvent}
      />
    )
  )
  return EventsArray
}

const Events = () => (
  <StaticQuery
    query={graphql`
      { allEventsListJson {
          edges {
            node {
              eventName
              eventDate
              eventPlace
              eventPlaceUrl
              aboutEventName
              aboutEvent
            }
          }
        }
      }
    `}
    render={data => getEventsList(data)}
  ></StaticQuery>
)

export default Events
