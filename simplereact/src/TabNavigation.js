import React from 'react';

class TabNavigation extends React.Component {

  click () {
    alert ("asdasdads");
  }

  render() {
    return(
      <div className='TabNavigation'>
        <div className="TabNavigationItem">
          Speakers
        </div>
        <div className="TabNavigationItem">
          Photos
        </div>
        <div className="TabNavigationItem">
          Videos
        </div>
      </div>
    );
  }
}

export default TabNavigation;