
import React from 'react'
import Head from '../components/Head'
import EventDescription from '../components/EventDescription'
import Tagline from '../components/Tagline'
import { Component } from "react"
import TabsWihtContent from '../components/TabsWihtContent'

class Events extends Component {
  render () {
    return <div>
      <Head />
      <EventDescription />
      <TabsWihtContent />
      <Tagline />
    </div>
  }
}

export default Events
