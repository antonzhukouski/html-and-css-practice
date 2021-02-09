import React from 'react'
import map from '../images/map.png'

class TimePlace extends React.Component {
  render() {
    return (
      <div className = 'timePlace'>
      <div className = 'time'>
        <div className = 'time__heading'>
          When & where
        </div>
        <div className = 'time__time'>
          26 Oct 19.00
        </div>
        <div className = 'time__url'>
          EventSpace.by
        </div>
        <div className = 'time__adress'>
          Oktyabrskaya str. 16am Minsk
        </div>
        <div className = 'time__registration'>
          <a href="minsk.rb/register">REGISTER</a>
        </div>
      </div>  
        <div className = 'place__map'>
          <img src= {map} alt = ''/>
        </div>
      </div>
    )
  }
}

export default TimePlace;
