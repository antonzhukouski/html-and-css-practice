import React from "react"
import Head from "../components/Head"
import EventDescription from '../components/EventDescription'
import Speakers from '../components/Speakers'
import Photos from '../components/Photos'
import Videos from '../components/Videos'
import Tabs from '../components/Tabs'
import Tagline from '../components/Tagline'

export default function Events() {
  return <div>
    <Head />
    <EventDescription />
    <Tabs>
      <div label="Speakers">
        <Speakers />
      </div>
      <div label="Photos">
        <Photos />
      </div>
      <div label="Videos">
        <Videos />
      </div>
    </Tabs>
    <Tagline />
  </div>
}
