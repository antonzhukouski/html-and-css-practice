import React from 'react';
import Sergyenko from '../src/images/Sergey Sergyenko.png'
import Smirnova from '../src/images/Alexandra Smirnova.png'
import Suhodolov from '../src/images/Kirill Suhodolov.png'
import Lomau from '../src/images/Aliaksandr Lomau.png'
import Speaker from '../src/Speaker'

class Speakers extends React.Component {

  render() {
    return (
      <div className = 'Speakers'>
        <Speaker name = "Sergey Sergyenko" photo = {<img src = {Sergyenko} alt = "" />} theme = "When the whole world is your database" />
        <Speaker name = "Alexandra Smirnova" photo = { <img src =  {Smirnova} alt = "" /> } theme = "Real-Time Error Alerting & Debugging Tools: Rollbar" />
        <Speaker name = "Kirill Suhodolov" photo = { <img src = {Suhodolov} alt = "" /> } theme = "We build bots. For real" />
        <Speaker name = "Aliaksandr Lomau" photo = { <img src = {Lomau} alt = "" />} theme = "Contract programming in Ruby" />

      </div>
    )
  }
}

export default Speakers;