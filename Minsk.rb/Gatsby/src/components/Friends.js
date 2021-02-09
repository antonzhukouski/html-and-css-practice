import React from 'react'
import rubyroidlabs from '../images/rubyroidlabs.svg'
import datarockets from '../images/datarockets.svg'
import cybergizer from '../images/cybergizer.svg'

export default function Friends() {
  return (
    <div className = 'friends'>
      Our Friends
      <div className="friends__links">
        <a href = 'rubyroidlabs.com'> <img src = {rubyroidlabs} alt ='' /> </a>
        <a href="datarockets.com"><img src= {datarockets} alt = '' /> </a>
        <a href="cybergizer.com"><img src= {cybergizer} alt = '' /> </a>
      </div>
    </div>
  )
}
