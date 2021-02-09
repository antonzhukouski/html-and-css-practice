import React from 'react'

export default function Mediapartners() {
  return (
    <div className = 'mediapartners'>
      <div className = 'mediapartners__head'>
        <h1><b> Media Partners </b></h1>
      </div>
      <div className = 'mediapartners__content'>
        <div className = 'mediapartners__content-partners'>
          <a href = 'https://rubyroidlabs.com/' > {'>>'} Rubyroid Labs </a><br />
          <a href = 'https://datarockets.com/' > {'>>'} Datarockets </a>
        </div>
        <div className = 'mediapartners__content-become-a-partner'>
          <a href="becomeapartner.minsk.rb"> Become a media partner {'>>'} </a>
        </div>
      </div>
    </div>
  )
}
