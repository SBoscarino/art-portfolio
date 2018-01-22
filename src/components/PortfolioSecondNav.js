import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import LionFillerImage from '../images/LionFillerImage.jpg';



// This component contains the SECOND navigation menu only accessible by clicking on "traditional" in the main portfolio navigation menu
class PortfolioSecondNav extends Component {
  constructor(){
    super();

    this.state = {
      threeDee: false,
      drawings: false,
      illustration: false,
      childrensIllustration: false
    }
    this.childrensIllustrationPage = this.childrensIllustrationPage.bind(this);
    this.threedeePage = this.threedeePage.bind(this);
    this.illustrationPage = this.illustrationPage.bind(this);
    this.drawingsPage = this.drawingsPage.bind(this);
  }
  childrensIllustrationPage(){
    this.setState({
      childrensIllustration: true,
      threeDee: false,
      drawings: false,
      illustration: false
    });
  }
  threedeePage(){
    this.setState({
      childrensIllustration: false,
      threeDee: true,
      drawings: false,
      illustration: false
    });
  }
  drawingsPage(){
    this.setState({
      childrensIllustration: false,
      threeDee: false,
      drawings: true,
      illustration: false
    });
  }
  illustrationPage(){
    this.setState({
      childrensIllustration: false,
      threeDee: false,
      drawings: false,
      illustration: true
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
    console.log("trad", this.state);
    if (this.state.illustrationPage === true){
      infoView = <p>Hey!</p>
      imageView = <div>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    console.log(this.state)
    return (
      <div className="flexWrapperForSecondNav">
        <ul className="innerWrapper" >
          <li><button onClick={this.drawingsPage}>Drawings</button></li>
          <li><button onClick={this.illustrationPage}>Illustration</button></li>
        </ul>
        <ul className="innerWrapper">
          <li><button onClick={this.threeDeePage}>3D</button></li>
          <li><button onClick={this.childrensIllustrationPage}>Children's Illustration</button></li>
        </ul>
        <section className="TradViewer">
          <div className="infoHolder">
          {infoView}
        </div>
          <div className="imageHolder" style={imageViewStyle}>
          {imageView}
        </div>
        </section>
      </div>
    )
  }
}
export default PortfolioSecondNav;
