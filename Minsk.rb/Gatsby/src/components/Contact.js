import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit() {
    alert(this.input.current.value);
  }

  render() {
    return (
      <div className = 'contact'>
        Contuct Us
        <form onSubmit={this.handleSubmit}>
          <div className = 'contact__form-input-name'>
            <input type="text" ref={this.input} defaultValue = "Name" id = 'input'/>
          </div>
          <div className = 'contact__form-input-e-mail'>
            <input type="text" ref={this.input} defaultValue = "e-mail" id = 'input'/>
          </div>
          <div className = 'contact__form-input-message'>
            <input type="text" ref={this.input} defaultValue = "Type your message here" id = 'message'/>
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

// export default function Contact() {
//   return (
//     <div>
//       <div className = 'contact'>
//         Contact Us
//         <div className = 'contact__form-input'>
//           <div className = 'contact__form-input-name'>
//             <textarea placeholder = "Name"> Name2 </textarea>
//           </div>
//           <div className = 'contact__form-input-e-mail'>
//             <textarea placeholder="e-mail *"></textarea>
//           </div>
//           <div className = 'contact__form-input-message'>
//             <textarea placeholder="Type your message here *"></textarea>
//           </div>
//           {/* <input defaultValue = ' def'> </input> */}
//           <div id="contact__form-input-button">
//             <button>SEND MESSAGE</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
