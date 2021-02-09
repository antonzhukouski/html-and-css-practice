import React from 'react'
import mapPin from '../images/map-pin.svg'

export default function Announce() {
  return (
    <div className = 'registration'>
      <div className = 'registration__registration'>
        {mapPin} <a href = 'minsk.rb/register'>Register</a>
      </div>
      <div className = 'registration__details'>
        <a href = 'minsk.rb/viewdetails'> View Details </a>
      </div>
    </div>
  )
}
