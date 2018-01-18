import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import Traditional from '../components/Traditional.js';

//This component is going to be a catch-all until I can separate it into smaller sections. For now, this component will hold navigation AND the functions that will replace the contents of ImageHolder to show each section's page. Each function will show/hide a section by adding or taking away a class.
class PortfolioNav extends Component {
  constructor(){
    super();

    this.state = {
      uiux: true,
      classic: false,
      digital: false,
      illustration: false,
    }
    this.UIUXPage = this.UIUXPage.bind(this);
    this.ClassicPage = this.ClassicPage.bind(this);
    this.DigitalPage = this.DigitalPage.bind(this);
  }
  UIUXPage(event){
    this.setState({
      uiux: true,
      classic: false,
      digital: false,
      illustration: false
    });
  }
  ClassicPage(){
    this.setState({
      uiux: false,
      classic: true,
      digital: false,
      illustration: false
    });
  }
  DigitalPage(){
    this.setState({
      uiux: false,
      classic: false,
      digital: true,
      illustration: false
    });
  }

  render(){
    let currentView;
    console.log(this.state)
    if (this.state.uiux === false){
      currentView = <p>There is nothing here.</p>
    } if (this.state.uiux === true) {
      currentView = <div>
        <h1>User Interaction & User Experience</h1>
        <p>My main focus when creating a space for my users is simplicity and cleanliness. I tend to lean toward simple palettes and shapes.</p>
        </div>
    } if (this.state.classic === true) {
      currentView = <div>
        <h1>Traditional</h1>
        <Traditional />
        </div>
    } if (this.state.digital === true) {
      currentView = <div>
        <h1>Digital</h1>
        <p>Digital art is a new space for me. I am enjoying experimentation with my tablet, Photoshop and Illustrator.</p>
        </div>
    }
    return (
      <div>
        <ul className="innerWrapper">
          <li><button onClick={this.UIUXPage}>UI/UX</button></li>
          <li><button onClick={this.ClassicPage}>Traditional</button></li>
          <li><button onClick={this.DigitalPage}>Digital</button></li>
        </ul>
        <div className="imageHolder">
          {currentView}
        </div>
      </div>
    )
  }
}
export default PortfolioNav;
