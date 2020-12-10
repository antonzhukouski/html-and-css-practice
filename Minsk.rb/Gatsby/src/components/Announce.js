import React from 'react'
import mapPin from '../images/map-pin.svg'

export default function Announce() {
  return (
    <div className = 'announce'>
      <div className = 'date'> 
        26 Oct  19-00
      </div>
      <div className = 'eventName'>
        Minsk.rb Beer Up!
      </div>
      <div className = 'place'>
        <div className = 'place__link'>
          <img src = {mapPin} alt=''/>
          <a href = 'eventspace.by'> EvenSpace.by </a>
        </div>
        <div className = 'place__adress'>
          Oktyabrskaya str.16a, Minsk
        </div>
      </div>
      <div className = 'registration'>
        <div className = 'registration__registration'>
          <a href = 'minsk.rb/register'>Register</a>
        </div>
        <div className = 'registration__details'>
          <a href = 'minsk.rb/viewdetails'> View Details </a>
        </div>
      </div>
    </div>
  )
}
