import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit() {
    alert('You sent message "' + this.input.current.value + '"');
  }

  render() {
    return (
      <div className = 'contact'>
        Contuct Us
        <form onSubmit={this.handleSubmit}>
          <div className = 'contact__form-input-name'>
            <input type="text" ref={this.input} placeholder = "Name" id = 'input'/>
          </div>
          <div className = 'contact__form-input-e-mail'>
            <input type="text" ref={this.input} placeholder = "e-mail" id = 'input'/>
          </div>
          <div className = 'contact__form-input-message'>
            <input type="text" ref={this.input} placeholder = "Type your message here" id = 'message'/>
          </div>
          <div className = 'contact__form-input-button'>
          <button  type="submit" value="Submit">
            SEND MESSAGE
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact
