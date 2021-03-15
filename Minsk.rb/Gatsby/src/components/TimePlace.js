import React, {Component} from 'react'
import {StaticQuery} from 'gatsby'

class TimePlaceStructure extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
        <div className = 'time-place'>
          <div className = 'time'>
            <div className = 'time__heading'>
              When & where
            </div>
            <div className = 'time__time'>
              {this.props.eventDate}
            </div>
            <div className = 'time__url'>
              {this.props.eventPlaceUrl}              
            </div>
            <div className = 'time__adress'>
              {this.props.eventPlace}
            </div>
            <div className = 'time__registration'>
              <a href="minsk.rb/register">REGISTER</a>
            </div>
          </div>
          <div className = 'place-map'>
              <img src= {this.props.eventPlaceMap} alt = ''/>
          </div>
        </div>
      
    )
  }
}

function getTimePlace(data) {
  const timePlaceArray = []
  data.allEventsListJson.edges.forEach(item =>
    timePlaceArray.push(
      <TimePlaceStructure
        eventDate = {item.node.eventDate}
        eventPlaceUrl = {item.node.eventPlaceUrl}
        eventPlace = {item.node.eventPlace}
        eventPlaceMap = {item.node.eventPlaceMap}
      />
    )
  )
  return timePlaceArray
}

const TimePlace = () => (
  <StaticQuery
    query={graphql`
      { allEventsListJson {
          edges {
            node {
              eventDate
              eventPlaceUrl
              eventPlace
              eventPlaceMap
            }
          }
        }
      }
    `}
    render={data => getTimePlace(data)}
  ></StaticQuery>
)

export default TimePlace
