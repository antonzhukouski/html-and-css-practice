import React from 'react'
import Head from '../components/Head'
import Share from '../components/Share'
import Mediapartners from '../components/Mediapartners'
import Count from '../components/Count'
import Friends from '../components/Friends'
import Contact from '../components/Contact'
import TimePlace from '../components/TimePlace'
import Events from '../components/Events'
import Schedule from '../components/Schedule'
import SpeakersPhoto2 from '../components/Speaker'
import Tagline from '../components/Tagline'

export default function Home() {
  return <div>
    <Head />
    <Events />
    <Share />
    <Schedule />
    <SpeakersPhoto2 />
    <Mediapartners />
    <TimePlace />
    <Count />
    <Friends />
    <Contact />    
    <Tagline />
  </div>
}
