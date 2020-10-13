import React from 'react'
import Logo from '../images/logo.svg'

class Head extends React.Component {
  render() {
    return(
      <div className = 'head'>
        <div className = 'navigation-menu'>
          <div className = 'navigation-menu__logo'>
            <a href = 'minsk.rb'>
              <img src = {Logo} vspace = '5' hspace = '5' alt = ''></img>
            </a>
          </div>
          <div className = 'navigation-menu__menu'>
            <a href = 'Minsk.rb/Events'> Events </a>
            <a href = 'Minsk.rb/Friends'> Friends </a>
            <a href = 'Minsk.rb/About'> About </a>
            <a href = 'Minsk.rb/Contact Us'> Contact Us </a>
          </div>
        </div>
        <div className = 'social-event'>
          <a href = 'facebook.com/Minsk.rb'> Facebook </a>
          <a href = 'youtube.com/Minsk.rb'> YouTube </a>
          <a href = 'vk.com'> Vkontakte </a>
        </div>
      </div>
    )
  }
}

export default Head;
