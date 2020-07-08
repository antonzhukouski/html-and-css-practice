import React from 'react'

class Speaker extends React.Component {
  render () {
    return (
      <div className = 'Speaker'>
        <div className = 'Speaker_name'> {this.props.name} </div>
        <div className = 'Speaker_photo'> {this.props.photo} </div>
        <div className = 'Speaker_theme'> {this.props.theme} </div>
      </div>
    )
  }
}

export default Speaker;