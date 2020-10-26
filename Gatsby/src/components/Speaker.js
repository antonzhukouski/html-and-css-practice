import React from 'react'

class Speaker extends React.Component {
  render () {
    return (
      <div className = 'speaker'>
        <div className = 'speaker__photo'> {this.props.photo} </div>
        <div className = 'speaker__text'>
          <div className = 'speaker__text-name'> {this.props.name} </div>
          <div className = 'speaker__text-theme'> {this.props.theme} </div>
        </div>
      </div>
    )
  }
}

export default Speaker;
