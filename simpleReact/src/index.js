import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          currentTab: 0,
          data: [
            { id: "0", name: "Speakers", content: 
              <div className="medialinkTarget">
                <div className="speakersEvent">
                  <div className="speakerContainer">
                    <div className="speakerContainerPhoto">
                      <img alt='' src={"/images/Sergey Sergyenko.png"} />
                    </div>
                  <div className="speakerContainerText">
                    <div className="speakerContainerTextName">
                      Sergey Sergyenko
                    </div>
                    <div className="speakerContainerTextTheme">
                      <p><b> When the whole world is your database </b></p>
                    </div>
                  </div>
                </div>
                <div className="speakerContainer">
                  <div className="speakerContainerPhoto">
                    <img alt='' src={"/images/Alexandra Smirnova.png"} />
                  </div>
                  <div className="speakerContainerText">
                    <div className="speakerContainerTextName">
                      Alexandra Smirnova
                    </div>
                    <div className="sspeakerContainerTextTheme">
                      <p><b> Real-Time Error Alerting & Debugging Tools: Rollbar </b></p>
                    </div>
                  </div>
                </div>
                <div className="speakerContainer">
                  <div className="speakerContainerPhoto">
                    <img alt='' src={"/images/Kirill Suhodolov.png"} />
                  </div>
                  <div className="speakerContainerText">
                    <div className="speakerContainerTextName">
                      Kirill Suhodolov
                    </div>
                    <div className="sspeakerContainerTextTheme">
                      <p><b> We build bots. For real </b></p>
                    </div>
                  </div>
                </div>
                <div className="speakerContainer">
                  <div className="speakerContainerPhoto">
                    <img alt='' src={"/images/Aliaksandr Lomau.png"} />
                  </div>
                    <div className="speakerContainerText">
                    <div className="speakerContainerTextName">
                      Aliaksandr Lomau
                    </div>
                    <div className="sspeakerContainerTextTheme">
                      <p><b> Contract programming in Ruby </b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            },
            { id: "1", name: "Photos", content: 
              <div className="medialink-target">
                <div className="gallery">
                  <a href={"/images/Event photo big 1.png"} title="Photo 1"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 2.png"} title="Photo 2"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 3.png"} title="Photo 3"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 1.png"} title="Photo 4"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 2.png"} title="Photo 5"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 3.png"} title="Photo 6"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 1.png"} title="Photo 7"> <img alt='' src={"/images/Event photo.png"} /> </a>
                  <a href={"/images/Event photo big 2.png"} title="Photo 8"> <img alt='' src={"/images/Event photo.png"} /> </a>
                </div>
              </div>
            },
            { id: "2", name: "Video", content: "Videos"}
          ]
  };
  this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(currentTab) {
    this.setState({ currentTab });
  }
    
  render() {
    return (
<div>
  <div className="tab">
  {this.state.data.map((button, i) => (
    <button key={button.name} className="tablinks" onClick={() => this.handleClick(i)}>{button.name}</button>
    )
    )
  }
  </div>

  <div className="tabcontent">
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);