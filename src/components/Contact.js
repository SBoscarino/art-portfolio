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
          <p className="pinkMe">Do you...</p>

          <p className="changingWord">{this.state.currentString}</p>
          <p className="pinkMe">Contact me through the following venues:</p>
          <div className="ContactVenueContainer">
            <ul className="flexOuterContact">
              <li><a href="https://github.com/sbscrino" target="_blank">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/stefanie-boscarino-17566b147/" target="_blank">LinkedIn</a></li>
            </ul>
            <ul className="flexOuterContact">
              <li><a href="https://www.tumblr.com/blog/ilickdeath" target="_blank">Tumblr</a></li>
              <li><a href="https://www.instagram.com/blaqk.cat/" target="_blank">Instagram</a></li>
              <li><a href="https://twitter.com/StefBoscarino" target="_blank">Twitter</a></li>
            </ul>
          </div>
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
