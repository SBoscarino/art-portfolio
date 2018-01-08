import React, {Component} from 'react';
import '../styles/contact.css'

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      wordFade : null,
      currentString: "...have questions?",
      counter: 0,
      arrayOfOptions: ["...have questions?", "...want an art commission?", "...just want to chat?", "...want tutoring in the arts or in code?" ]
    }

    this.wordFlasher = this.wordFlasher.bind(this);
    this.interval = setInterval(this.wordFlasher, 1500);
  }
  render () {

    return (
      <div>
        <h1>Contact Me</h1>
        <section className="contactInfo">
          <p>Do you...</p>

          <p className="changingWord">{this.state.currentString}</p>
          <p>Awesome!</p>
          <p>Contact me through the following venues:</p>
          <ul>
            <li>GitHub</li>
            <li>Tumblr</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </section>
        <section className="contactBody">
        </section>
      </div>
    )
  }
  wordFlasher(){
    this.setState({
     wordFade : "null"
   });
    if (this.state.counter < this.state.arrayOfOptions.length){
         this.setState({
          wordFade : "fadeAnimation",
          currentString : this.state.arrayOfOptions[this.state.counter],
          counter : this.state.counter + 1
        });
        this.setState({
         wordFade : null,
       });
      }
    else if (this.state.counter === this.state.arrayOfOptions.length){
      this.setState({
        counter: 0,
        currentString : "...want a website just for you?"
      })
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
}
export default Contact;
