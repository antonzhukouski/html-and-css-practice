import React from 'react'
import {useStaticQuery} from 'gatsby'
import Tabs from './Tabs';

export default function TabsWithContent() {
  const data = useStaticQuery(graphql`
    query BeerUpTabs2 { 
      allBeerUpSpeakersTabJson {
        edges {
          node {
            photo
            speaker
            speakerTheme
          }
        }
      }
      allBeerUpPhotosTabJson {
        edges {
          node {
            photoLittle
            photoBig
          }
        }
      }
      allBeerUpVideosTabJson {
        edges {
          node {
            video
          }
        }
      }
    }
  `)

  const speakers = data.allBeerUpSpeakersTabJson.edges.map (({node}) => {
    const {speaker, speakerTheme, photo} = node;
    return {
      speaker,
      speakerTheme,
      photo
    }
  })

  const photos = data.allBeerUpPhotosTabJson.edges.map (({node}) => {
    const {photoLittle, photoBig} = node;
    return {
      photoLittle,
      photoBig
    }
  })

  const videos = data.allBeerUpVideosTabJson.edges.map (({node}) => {
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
          <iframe title = "Title of iframe" width="187" height="105" src={video} allow="autoplay; encrypted-media" ></iframe>
        </div>
      )}
      </div>
    </Tabs>
  )
}
