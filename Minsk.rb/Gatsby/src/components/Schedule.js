import React, {Component} from 'react'
import {StaticQuery} from 'gatsby'

class ScheduleStructure extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className = 'schedule'>
          <div className = 'schedule__block'>
            <div className = 'schedule__block-time'>
              {this.props.time}
            </div>
            <div className = 'schedule__block-event'>
              {this.props.theme}
            </div>
            <div className = 'schedule__block-speaker'>
              {this.props.speaker}
            </div>
          </div>
        </div>
      
    )
  }
}

function getSchedule(data) {
  const scheduleArray = []
  data.allBeerUpScheduleJson.edges.forEach(item =>
    scheduleArray.push(
      <ScheduleStructure
        time = {item.node.time}
        theme = {item.node.theme}
        speaker = {item.node.speaker}
      />
    )
  )
  return scheduleArray
}

const Schedule = () => (
  <StaticQuery
    query={graphql`
      { allBeerUpScheduleJson {
          edges {
            node {
              time
              speaker
              theme
            }
          }
        }
      }
    `}
    render={data => getSchedule(data)}
  ></StaticQuery>
)

export default Schedule
