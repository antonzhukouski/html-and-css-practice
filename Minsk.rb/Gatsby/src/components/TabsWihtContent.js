import React from 'react'
import {useStaticQuery} from 'gatsby'
import Tabs from './Tabs';

export default function TabsWihtContent() {
  const data = useStaticQuery(graphql`
    query BeerUpTabs { 
      allBeerUpScheduleJson {
        edges {
          node {
            speaker
            photo
            speakerTheme
            photoLittle
            photoBig
            video
          }
        }
      }
    }
  `)

  const speakers = data.allBeerUpScheduleJson.edges.map (({node}) => {
    const {speaker, speakerTheme, photo} = node;
    return {
      speaker,
      speakerTheme,
      photo
    }
  })

  const photos = data.allBeerUpScheduleJson.edges.map (({node}) => {
    const {photoLittle, photoBig} = node;
    return {
      photoLittle,
      photoBig
    }
  })

  const videos = data.allBeerUpScheduleJson.edges.map (({node}) => {
    const { video } = node;
    return {
      video
    }
  })

  return(
    <Tabs>
      <div label = 'Speakers'>
        {speakers.map (({speaker, speakerTheme, photo}) =>
          <div className = 'speaker' key = {speaker}>
            <div className = 'speaker__photo'>
              <img src = {photo} alt =''/>
            </div>
            <div className = 'speaker__text'>
              <div className = 'speaker__text-name'> 
                {speaker} 
              </div>
              <div className = 'speaker__text-theme'> 
                {speakerTheme}
              </div>
            </div>
          </div>
        )}
      </div>
      <div label = "Photos" className = 'Photos'>
      {photos.map (({photoLittle, photoBig}) =>
        <div className = 'photos' key = {photoLittle}>
          <a href = {photoBig}> 
            <img src = {photoLittle} alt = ''/> 
          </a>
        </div>
      )}
      </div>
      <div label = "Videos" className = 'Videos'>
      {videos.map (({ video }) =>
        <div className = 'video' key = {videos}>
          <iframe width="187" height="105" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      )}
      </div>
    </Tabs>
  )
}
