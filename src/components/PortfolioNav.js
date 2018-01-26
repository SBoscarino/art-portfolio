import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import Traditional from '../components/Traditional.js';
import LionFillerImage from '../images/LionFillerImage.jpg';

//for photography
import aurora from '../images/portfolioImages/photography/aurora.JPG';
import icelandChurch from '../images/portfolioImages/photography/icelandChurch.JPG';
import sheep from '../images/portfolioImages/photography/sheep.JPG';

//for Digital
import lizardLion from '../images/portfolioImages/digital/lizardLion.jpg';
import muppetBoye from '../images/portfolioImages/digital/muppetBoye.jpg';
import pinkDude from '../images/portfolioImages/digital/pinkDude.jpg';

//for threeDee


//This component is going to be a catch-all until I can separate it into smaller sections. For now, this component will hold navigation AND the functions that will replace the contents of ImageHolder to show each section's page. Each function will show/hide a section by adding or taking away a class.
class PortfolioNav extends Component {
  constructor(){
    super();

    this.state = {
      photography: true,
      classic: false,
      digital: false,
      threeDee: false,
    }
    this.photographyPage = this.photographyPage.bind(this);
    this.ClassicPage = this.ClassicPage.bind(this);
    this.DigitalPage = this.DigitalPage.bind(this);
    this.threeDeePage = this.threeDeePage.bind(this);
  }
  photographyPage(event){
    this.setState({
      photography: true,
      classic: false,
      digital: false,
      illustration: false,
      threeDee: false
    });
  }
  threeDeePage(){
    this.setState({
      photography: false,
      classic: false,
      digital: false,
      illustration: false,
      threeDee: true
    });
  }
  ClassicPage(){
    this.setState({
      photography: false,
      classic: true,
      digital: false,
      illustration: false,
      threeDee: false
    });
  }
  DigitalPage(){
    this.setState({
      photography: false,
      classic: false,
      digital: true,
      illustration: false,
      threeDee: false
    });
  }

  render(){
    let infoView;
    let imageView;
    console.log(this.state)
    if (this.state.photography === true) {
      infoView = <div>
        <h2>photography</h2>
        <p>I'm still learning a lot about proper photo-taking. I'm currently armed with a Canon Rebel T1i and a nice lens!</p>
        </div>
        imageView = <div>
          <img className="singleImage LionFiller" alt="Reykyavik church in Iceland" src={icelandChurch}/>
          <img className="singleImage LionFiller" alt="Aurora in Iceland" src={aurora}/>
          <img className="singleImage LionFiller" alt="Sheep in Iceland" src={sheep}/>
        </div>
    } if (this.state.classic === true) {
      infoView = <div>
        <h2>traditional</h2>
        <div>
          <Traditional/>
        </div>
        </div>
    } if (this.state.threeDee === true) {
      infoView = <div>
        <h2>three dimensions</h2>
        <p>I work with a range of materials like metals, papier mache and clay.</p>
        </div>
      imageView = <div>
        <p>Sorry - nothing uploaded yet!</p>
      </div>
    } if (this.state.digital === true) {
      infoView = <div>
        <h2>digital</h2>
        <p>Digital art is a new space for me. I am enjoying experimentation with my tablet, Photoshop and Illustrator.</p>
        </div>
        imageView = <div>
          <img className="singleImage LionFiller" alt="critter" src={pinkDude}/>
          <img className="singleImage LionFiller" alt="a lion lizard" src={lizardLion}/>
          <img className="singleImage LionFiller" alt="a muppet who vapes" src={muppetBoye}/>
        </div>
    }
    return (
      <div>
        <ul className="innerWrapper">
          <li className="navButton"  onClick={this.photographyPage}>photography</li>
          <li className="navButton" onClick={this.ClassicPage}>traditional</li>
          <li className="navButton" onClick={this.DigitalPage}>digital</li>
          <li className="navButton" onClick={this.threeDeePage}>3D</li>
      </ul>
        <div className="infoHolder">
          {infoView}
        </div>
        <div className="imageHolder imageViewStyle">
          {imageView}
        </div>
      </div>
    )
  }
}
export default PortfolioNav;
