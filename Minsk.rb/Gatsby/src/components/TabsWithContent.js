import React from 'react'
import {useStaticQuery} from 'gatsby'
import Tabs from './Tabs';

export default function TabsWithContent() {
  const data = useStaticQuery(graphql`
  {
    allEventListJson {
      edges {
        node {
          speakers {
            speaker
            speakerPhoto
            theme
          }
          photos {
            photoLittle
            photoBig
          }
          videos {
            video
          }
        }
      }
    }
  }
  `)

  
  return data.allEventListJson.edges.map(({node}) => {
    const {speakers, photos, videos} = node;
    return <div key = {speakers}>
      <Tabs>
        <div label = 'Speakers'>
          {speakers.map (({speaker, theme, speakerPhoto}) =>
            <div className = 'speaker' key = {speaker}>
              <div className = 'speaker__photo'>
                <img src = {speakerPhoto} alt =''/>
              </div>
              <div className = 'speaker__text'>
                <div className = 'speaker__text-name'> 
                  {speaker} 
                </div>
                <div className = 'speaker__text-theme'> 
                  {theme}
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
          <div className = 'video' key = "video">
            <iframe width="560" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        )}
        </div>
      </Tabs>
    </div>
  })  
}
