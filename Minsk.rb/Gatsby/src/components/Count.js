import React from 'react'

export default function Count() {
  return (
    <div>
      <div className = 'count'>
        <div className = 'count__event'>
          <div className = 'count__events-counter'>
            20+
          </div>
          <div className = 'count__events-name'>
            events
          </div>
        </div>
        <div className = 'count__speakers'>
          <div className = 'count__speakers-counter'>
            50+
          </div>
          <div className = 'count__speakers-name'>
            speakers
          </div>
        </div>
        <div className = 'count__visitors'>
          <div className = 'count__visitors-counter'>
            900+
          </div>
          <div className = 'count__visitors-name'>
            visitors
          </div>
        </div>
        <div className = 'count__years'>
          <div className = 'count__years-counter'>
            3
          </div>
          <div className = 'count__years-name'>
            years
          </div>
        </div>
      </div>
      <div className = 'facebook-link'>
      <a href= 'facebook.com/minsk.rb'> Minsk.rb on Facebook {'>>'} </a>
      </div>
    </div>
  )
}
