import React, { Component } from 'react'

class TabLinks extends Component {

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'medialink-source';

    if (activeTab === label) {
      className += '-active';
    }

    return (
      <div
        role = 'button' // for 'Visible, non-interactive elements with click handlers must have at least one keyboard listener.'
        tabindex = '0' //Static HTML elements with event handlers require a role
        className={className}
        onClick={onClick}
        onKeyDown={this.handleKeyDown}
      >
        {label}
      </div>
    );
  }
}

export default TabLinks;
