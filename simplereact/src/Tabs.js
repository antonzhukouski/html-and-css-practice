import React from 'react';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';

class Tabs extends React.Component {
  render() {
      return (
      <div className ='Tabs'>
        <TabNavigation />
        <TabContent />
      </div>)

  }
}

export default Tabs;