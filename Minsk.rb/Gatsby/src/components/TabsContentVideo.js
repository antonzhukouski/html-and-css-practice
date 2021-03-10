import React, {Component} from 'react'
import {useStaticQuery} from 'gatsby'

export default function TabsContentVideos() {
  const data = useStaticQuery(graphql`
    query BeerUpVideos { 
      allBeerUpScheduleJson {
        edges {
          node {
            video
          }
        }
      }
    }
  `)

  const videos = data.allBeerUpScheduleJson.edges.map (({node}) => {
    const { video } = node;
    return {
      video
    }
  })

  return(
    <div label = 'Videos'>
      {videos.map (({ video }) =>
        <div className = 'video' key = {videos}>
          <video> 
            <source src = {video}/>
          </video>
          sss
        </div>
      )}
      sss
    </div>
  )
}
