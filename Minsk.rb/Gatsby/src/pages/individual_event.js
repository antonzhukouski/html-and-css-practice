
import React from 'react'
import Head from '../components/Head'
import EventDescription from '../components/EventDescription'
import Tagline from '../components/Tagline'
import { Component } from "react"
import TabsWithContent from '../components/TabsWithContent'

class Events extends Component {
  render () {
    return <div>
      <Head />
      <EventDescription />
      <TabsWithContent />
      <Tagline />
    </div>
  }
}

export default Events
