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
        role = 'button'
        tabIndex = '0'
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
