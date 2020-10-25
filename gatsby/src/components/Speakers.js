import React from 'react'
import Sergyenko from '../images/Sergey Sergyenko.png'
import Smirnova from '../images/Alexandra Smirnova.png'
import Suhodolov from '../images/Kirill Suhodolov.png'
import Lomau from '../images/Aliaksandr Lomau.png'
import Speaker from '../components/Speaker.js'

class Speakers extends React.Component {

  render() {
    return (
      <div className = 'speakers' id='0'>
        <Speaker
          photo = {<img src = {Sergyenko} alt = '' />}
          name = 'Sergey Sergyenko'
          theme = 'When the whole world is your database' />
        <Speaker
          photo = { <img src =  {Smirnova} alt = '' /> }
          name = 'Alexandra Smirnova'
          theme = 'Real-Time Error Alerting & Debugging Tools: Rollbar' />
        <Speaker
          photo = { <img src = {Suhodolov} alt = '' /> }
          name = 'Kirill Suhodolov'
          theme = 'We build bots. For real' />
        <Speaker
          photo = { <img src = {Lomau} alt = '' />}
          name = 'Aliaksandr Lomau'
          theme = 'Contract programming in Ruby' />
      </div>
    )
  }
}

export default Speakers;
