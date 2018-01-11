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
  }
  UIUXPage(event){
    console.log("uiux");
    this.setState({uiux: true});
  }


  ClassicPage(){
    console.log("cl");
  }
  DigitalPage(){
    console.log("di");
  }
  IllustrationPage(){
    console.log("Il");
  }

  render(){
    let currentView;
    console.log(this.state)
    if (this.state.uiux === false){
      currentView = <p>Ain't nothing here.</p>
    } if (this.state.uiux === true) {
      currentView = <p>uiux is active</p>
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
