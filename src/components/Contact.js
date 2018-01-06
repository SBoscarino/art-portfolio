import React, {Component} from 'react';

class Contact extends Component {
  render () {

    // this is for the flashing words
    let currentWord;
    let counter = 0;
    let arrayOfOptions = ["...have questions?", "...want an art commission?", "...just want to chat?", "...want tutoring in the arts or in code?", "...want a website just for you?" ];

    function changeWordInterval() {
      setInterval(wordFlasher, 4000);
    }

    function wordFlasher(){
      if (counter > arrayOfOptions.length) {
        counter = 0;
      } if (counter <= arrayOfOptions.length){
        for (let i = 0; i < arrayOfOptions.length; i++){
          currentWord = <p>arrayOfOptions[i]</p>
          counter += 1;
        }
      }
    }

    return (
      <div>
        <h1>Contact Me</h1>
        <section className="contactInfo">
          <p>Do you...</p>
          {currentWord}

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
}
export default Contact;
