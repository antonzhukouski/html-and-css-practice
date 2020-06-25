import React from 'react';
import Speakers from '../src/Speakers'
import Photos from '../src/Photos'
import Videos from '../src/Videos'

class TabContent extends React.Component {
  render () {
    return (
      <div className='TabContent'>
        <Speakers />
        <Photos />
        <Videos />
      </div>
    )
  }
}

export default TabContent;