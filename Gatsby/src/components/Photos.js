import React from 'react'
import EventPhoto1 from '../images/Event photo big 1.png'
import EventPhoto2 from '../images/Event photo big 2.png'
import EventPhoto3 from '../images/Event photo big 3.png'

class Photos extends React.Component {
  render () {
    return (
      <div className='Photos' id='1'>
        <img alt = '' src = {EventPhoto1} />
        <img alt = '' src = {EventPhoto2} />
        <img alt = '' src = {EventPhoto3} />
        <img alt = '' src = {EventPhoto1} />
        <img alt = '' src = {EventPhoto2} />
        <img alt = '' src = {EventPhoto3} />
      </div>
    )
  }
}

export default Photos;
