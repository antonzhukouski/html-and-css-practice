import React from "react"
import Head from "../components/Head"
import EventDescription from '../components/EventDescription'
import Tabs from '../components/Tabs'
import Tagline from '../components/Tagline'

export const query = graphql`
  {
    allEventPhotoJson {
      edges {
        node {
          photoLittle
          photoBig
          tag
        }
      }
    }
    allEventSpeakersJson {
      edges {
        node {
          photo
          speaker
          theme
        }
      }
    }
    allEventVideosJson {
      edges {
        node {
          video
        }
      }
    }
  }
`

export default function Events ({data}) {
  const gallery = data.allEventPhotoJson.edges.map (({node}) => {
    const {photoLittle, photoBig, tag} = node;
    return {
      photoLittle,
      photoBig,
      tag
    };
  });
  const speakers = data.allEventSpeakersJson.edges.map (({node}) => {
        const {photo, speaker, theme} = node;
        return {
          photo,
          speaker,
          theme
        };
  });
  const videos = data.allEventVideosJson.edges.map (({node}) => {
    const {video} = node;
    return {
      video
    };
});
  return <div>
    <Head />
    <EventDescription />
    <Tagline />
    <Tabs>
    <div label="Speakers">
      {speakers.map (({photo, speaker, theme}) => (
        <div className = 'speaker' key={speaker}>
            <div className = 'speaker__photo'> {photo} </div>
            <div className = 'speaker__text'>
              <div className = 'speaker__text-name'> {speaker} </div>
              <div className = 'speaker__text-theme'> {theme} </div>
            </div>
        </div>
      ))}
    </div>
    <div label="Photos" className='Photos'>
      {gallery.map (({photoLittle, photoBig, tag}) => (
        <div key={tag} className='aaa'>
          <div className='Photos'>{tag} {photoLittle} {photoBig} </div>
        </div>
      ))}
    </div>
    <div label='Videos' className='Videos'>
    {videos.map (({video}) => (
      <div key={video} className='Videos'>
        {video}
      </div>
    ))}
    </div>
    </Tabs>
  </div>
}
