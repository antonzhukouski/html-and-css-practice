import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './Tabs'
import TabNavigation from './TabNavigation'
import TabContent from './TabContent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      data: [
        { id: "0", name: "Speakers"},
        { id: "1", name: "Photos"},
        { id: "2", name: "Videos"}
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentTab) {
    this.setState({currentTab});
  }

  render() {
    return(
      <div>
        <div className="tab">
          {this.state.data.map((button, i) => (
            <button key={button.name} className="tablinks" onClick={() => this.handleClick(i)}> {button.name} </button>
            )
            )
          }
        </div>

        <div className="TabContent">
          {this.state.currentTab !== -1 &&
          <React.Fragment>
            {this.state.data[this.state.currentTab].content}
          </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

export default App;