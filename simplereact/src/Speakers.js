import React from 'react';
import Sergyenko from '../src/images/Sergey Sergyenko.png'
import Smirnova from '../src/images/Alexandra Smirnova.png'
import Suhodolov from '../src/images/Kirill Suhodolov.png'
import Lomau from '../src/images/Aliaksandr Lomau.png'


class Speakers extends React.Component {

  render() {
    return (
      <div className='Speaker'>
        <img alt='' src={Lomau} />
        {this.props.photo}
        {this.props.name}
        {this.props.theme}
      </div>
    )
  }
}

export default Speakers;

/*
<Speaker photo = "Sergyenko" name = "Sergey Sergyenko" theme = "When the whole world is your database" />
<Speaker photo = "Smirnova" name = "Alexandra Smirnova" theme = "Real-Time Error Alerting & Debugging Tools: Rollbar" />
<Speaker photo = "Suhodolov" name = "Kirill Suhodolov" theme = "We build bots. For real" />
<Speaker photo = "Lomau" name = "Aliaksandr Lomau" theme = "Contract programming in Ruby" />
*/