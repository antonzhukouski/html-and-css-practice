import React, {Component} from 'react'
import {StaticQuery} from 'gatsby'

class SpeakersPhotoStructure extends Component {
  render() {
    return (
      <div className = 'speaker'>
        <div className = 'speaker-photo'>
          <img src = {this.props.photo} alt = ''/>
        </div>
        <div className = 'speaker-name'>
          {this.props.speaker}
        </div>
      </div>
    )
  }
}

function getSpeakersPhoto(data) {
  const speakersPhotoArray = []
  data.allBeerUpScheduleJson.edges.forEach (item =>
    speakersPhotoArray.push(
      <SpeakersPhotoStructure 
        photo = {item.node.photo}
        speaker = {item.node.speaker}
      />
    )
  )
  return speakersPhotoArray
}

const SpeakersPhoto = () => (
  <StaticQuery
    query={graphql`
      {
        allBeerUpScheduleJson {
          edges {
            node {
              speaker
              photo
            }
          }
        }
      }
    `}
    render={data => getSpeakersPhoto(data)}
  ></StaticQuery>
);

class SpeakersPhoto2 extends Component {
  render() {
  return <div className = 'speakers'>
    <div className = 'speakers__head'>
      Speakers _
    </div>
    <div className = 'speakers__list'>
      <SpeakersPhoto />
    </div>
  </div>
}
}

export default SpeakersPhoto2
