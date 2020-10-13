import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

    let className = 'tab-content';

    if (activeTab === label) {
      className += ' tab-content-active';
    }

    return (
      <div
        className={className}
        onClick={onClick}
      >
        {label}
      </div>
    );
  }
}

export default TabLinks;
