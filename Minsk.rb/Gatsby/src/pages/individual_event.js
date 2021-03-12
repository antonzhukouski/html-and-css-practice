
import React from 'react'
import Head from '../components/Head'
import EventDescription from '../components/EventDescription'
import Tagline from '../components/Tagline'
import { Component } from "react"
import TabsWihtContent from '../components/TabsWihtContent'
import TabsWihtContent2 from '../components/TabsWithContent2'

class Events extends Component {
  render () {
    return <div>
      <Head />
      <EventDescription />
      {/* <TabsWihtContent /> */}
      <TabsWihtContent2 />
      <Tagline />
    </div>
  }
}

export default Events
