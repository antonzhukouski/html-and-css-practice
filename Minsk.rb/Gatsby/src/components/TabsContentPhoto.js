import React, {Component} from 'react'
import {useStaticQuery} from 'gatsby'

export default function TabsContentSpeakers() {
  const data = useStaticQuery(graphql`
    query BeerUpPhotos { 
      allBeerUpScheduleJson {
        edges {
          node {
            photoLittle
            photoBig
          }
        }
      }
    }
  `)

  const photos = data.allBeerUpScheduleJson.edges.map (({node}) => {
    const {photoLittle, photoBig} = node;
    return {
      photoLittle,
      photoBig
    }
  })

  return(
    <div label = "Photos">
      {photos.map (({photoLittle, photoBig}) =>
        <div className = 'photos' key = {photoLittle}>
          <a href = {photoBig}> 
            <img src = {photoLittle} /> 
          </a>
        </div>
      )}
    </div>
  )
}
