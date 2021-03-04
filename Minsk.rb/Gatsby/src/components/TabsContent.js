import React, {Component} from 'react'
import {StaticQuery} from 'gatsby'
import Tabs from './Tabs'



class TabsContentStructure extends Component {
  render() {
    return ( <div>
      <Tabs>
        <div label = "Speakers">
          <div className = 'speaker' key={this.props.speaker}>
            <div className = 'speaker-photo'>
              <img src = {this.props.photo} alt = ''/>
            </div>
            <div className = 'speaker__text'>
                <div className = 'speaker__text-name'>
                  {this.props.speaker} 
                </div>
                <div className = 'speaker__text-theme'>
                  {this.props.speakerTheme}
                </div>
            </div>
          </div>
        </div>
        <div label = "Photos" className='Photos'>
          <div className='Photos'>
            <img src = {this.props.photoLittle} alt = '' />
            <img src = {this.props.photoBig} alt = '' /> 
          </div>
        </div>
      </Tabs>
    </div>
    )
  }
}

function getTabsContent(data) {
  const speakersPhotoArray = []
  data.allBeerUpScheduleJson.edges.forEach (item =>
    speakersPhotoArray.push(
      <TabsContentStructure 
        photo = {item.node.photo}
        speaker = {item.node.speaker}
        speakerTheme = {item.node.speakerTheme}
        photoLittle = {item.node.photoLittle}
        photoBig = {item.node.photoBig}
        video = {item.node.video}
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
            photo
            speaker
            speakerTheme
            photoLittle
            photoBig
            video
          }
        }
      }
    }
    `}
    render={data => getTabsContent(data)}
  ></StaticQuery>
);

class TabsContent extends Component {
  render() {
    return (       
      <SpeakersPhoto />
    )
  }
}

export default TabsContent
