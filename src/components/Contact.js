import React, {Component} from 'react';

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      currentString: "...have questions?",
      counter: 1,
      arrayOfOptions: ["...have questions?", "...want an art commission?", "...just want to chat?", "...want tutoring in the arts or in code?", "...want a website just for you?" ]
    }

    this.wordFlasher = this.wordFlasher.bind(this);
    this.interval = setInterval(this.wordFlasher, 10000);
  }
  render () {

    return (
      <div>
        <h1>Contact Me</h1>
        <section className="contactInfo">
          <p>Do you...</p>

          {this.currentString}
          {console.log(this.state)}

          <p>{this.state.currentString}</p>
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
    console.log("this is the state: ", this.state);
    if (this.state.counter <= this.state.arrayOfOptions.length){
         this.setState({
          currentString : this.state.arrayOfOptions[this.state.counter],
          counter : this.state.counter + 1,
        });
      }
    else if (this.state.counter > this.state.arrayOfOptions.length) {
      this.setState({
        counter : 0
      })
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
    console.log("firing?");
  }
}
export default Contact;
