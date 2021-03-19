import React, {Component} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default function Schedule() {
  const data = useStaticQuery(graphql`
    query Schedule {
      allEventListJson {
        edges {
          node {
            schedule {
              time
              theme
              speaker
              speakerPhoto
            }
          }
        }
      }
    }
  `)

  const schedule = data.allEventListJson.edges.node.schedule.map (({node}) => {
    const {time, theme, speaker, speakerPhoto} = node;
    return {
      time,
      theme,
      speaker,
      speakerPhoto
    }
  })

  return (
    <div>
      {schedule.map (({time, theme, speaker, speakerPhoto}) => 
        <div className = 'tesDiv' key = 'time'> 
          {time}
          {theme}
          {speaker}
          {speakerPhoto}
        </div>
        )}
    </div>
  )
}

// class ScheduleStructure extends Component {
//   constructor(props) {
//     super()
//   }
//   render() {
//     return (
//         <div className = 'schedule' >
//           <div className = 'schedule__block'>
//             <div className = 'schedule__block-time'>
//               {this.props.time}
//             </div>
//             <div className = 'schedule__block-event'>
//               {this.props.theme}
//             </div>
//             <div className = 'schedule__block-speaker'>
//               {this.props.speaker}
//             </div>
//           </div>
//         </div>
      
//     )
//   }
// }

// function getSchedule(data) {
//   const scheduleArray = []
//   data.allBeerUpScheduleJson.edges.forEach(item =>
//     scheduleArray.push(
//       <ScheduleStructure
//         time = {item.node.time}
//         theme = {item.node.theme}
//         speaker = {item.node.speaker}
//       />
//     )
//   )
//   return scheduleArray
// }

// const Schedule = () => (
//   <StaticQuery
//     query={graphql`
//       { allBeerUpScheduleJson {
//           edges {
//             node {
//               time
//               speaker
//               theme
//             }
//           }
//         }
//       }
//     `}
//     render={data => getSchedule(data)}
//   ></StaticQuery>
// )

// export default Schedule
