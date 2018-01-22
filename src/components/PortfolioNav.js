import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import Traditional from '../components/Traditional.js';
import LionFillerImage from '../images/LionFillerImage.jpg';

//This component is going to be a catch-all until I can separate it into smaller sections. For now, this component will hold navigation AND the functions that will replace the contents of ImageHolder to show each section's page. Each function will show/hide a section by adding or taking away a class.
class PortfolioNav extends Component {
  constructor(){
    super();

    this.state = {
      uiux: true,
      classic: false,
      digital: false,
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
    let infoView;
    let imageView;
    let imageViewStyle= {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: 7
    }
    let singleImage = {
      padding: 2,
    }
    console.log(this.state)
    if (this.state.uiux === false){
      infoView = <p>There is nothing here.</p>
    } if (this.state.uiux === true) {
      infoView = <div>
        <h1>User Interaction & User Experience</h1>
        <p>My main focus when creating a space for my users is simplicity and cleanliness. I tend to lean toward simple palettes and shapes.</p>
        </div>
        imageView = <div>
          <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
          <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
          <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        </div>
    } if (this.state.classic === true) {
      infoView = <div>
        <h1>Traditional</h1>
        <div>
          <Traditional/>
        </div>
        </div>
    } if (this.state.digital === true) {
      infoView = <div>
        <h1>Digital</h1>
        <p>Digital art is a new space for me. I am enjoying experimentation with my tablet, Photoshop and Illustrator.</p>
        </div>
        imageView = <div>
          <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
          <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
          <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
          <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
          <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        </div>
    }
    return (
      <div>
        <ul className="innerWrapper">
          <li className="navButton"><button onClick={this.UIUXPage}>UI/UX</button></li>
          <li className="navButton"><button onClick={this.ClassicPage}>Traditional</button></li>
          <li className="navButton"><button onClick={this.DigitalPage}>Digital</button></li>
        </ul>
        <div className="infoHolder">
          {infoView}
        </div>
        <div className="imageHolder" style={imageViewStyle}>
          {imageView}
        </div>
      </div>
    )
  }
}
export default PortfolioNav;
