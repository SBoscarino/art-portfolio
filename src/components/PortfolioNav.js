import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import NoImages from '../components/ImageSections/NoImages.js';
import UIDesign from '../components/ImageSections/UIDesign.js';
import Classic from '../components/ImageSections/Classic.js';
import Digital from '../components/ImageSections/Digital.js';

//This component is going to be a catch-all until I can separate it into smaller sections. For now, this component will hold navigation AND the functions that will replace the contents of ImageHolder to show each section's page. Each function will show/hide a section by adding or taking away a class.
class PortfolioNav extends Component {
  constructor(){
    super();

    this.state = {
      uiux: false,
      classic: false,
      digital: false,
      illustration: false,
    }
    this.UIUXPage = this.UIUXPage.bind(this);
    this.ClassicPage = this.ClassicPage.bind(this);
    this.DigitalPage = this.DigitalPage.bind(this);
    this.IllustrationPage = this.IllustrationPage.bind(this);
  }
  UIUXPage(event){
    console.log("uiux");
    this.setState({uiux: true, classic: false, digital: false, illustration: false});
  }
  ClassicPage(){
    console.log("cl");
    this.setState({uiux: false, classic: true, digital: false, illustration: false});
  }
  DigitalPage(){
    console.log("di");
    this.setState({uiux: false, classic: false, digital: true, illustration: false});
  }
  IllustrationPage(){
    console.log("Il");
    this.setState({uiux: false, classic: false, digital: false, illustration: true});
  }

  render(){
    let currentView;
    console.log(this.state)
    if (this.state.uiux === false){
      currentView = <p>There is nothing here.</p>
    } if (this.state.uiux === true) {
      currentView = <p>uiux is active</p>
    }
    if (this.state.classic === true) {
      currentView = <p>classic is active</p>
    }
    if (this.state.illustration === true) {
      currentView = <p>illustration is active</p>
    }
    if (this.state.digital === true) {
      currentView = <p>digital is active</p>
    }
    return (
      <div>
        <ul className="innerWrapper">
          <li><button onClick={this.UIUXPage}>UI/UX</button></li>
          <li><button onClick={this.ClassicPage}>Classic</button></li>
          <li><button onClick={this.DigitalPage}>Digital</button></li>
          <li><button onClick={this.IllustrationPage}>Illustration</button></li>
        </ul>
        <div className="imageHolder">
          {currentView}
        </div>
      </div>
    )
  }
}
export default PortfolioNav;
