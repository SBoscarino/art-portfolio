import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import LionFillerImage from '../images/LionFillerImage.jpg';



// This component contains the SECOND navigation menu only accessible by clicking on "traditional" in the main portfolio navigation menu
class PortfolioSecondNav extends Component {
  constructor(){
    super();

    this.state = {
      sketches: false,
      illustration: true
    }
    this.illustrationPage = this.illustrationPage.bind(this);
    this.sketchesPage = this.sketchesPage.bind(this);
  }
  sketchesPage(){
    this.setState({
      childrensIllustration: false,
      threeDee: false,
      sketches: true,
      illustration: false
    });
  }
  illustrationPage(){
    this.setState({
      childrensIllustration: false,
      threeDee: false,
      sketches: false,
      illustration: true
    });
  }

  render(){
    let infoView;
    let imageView;
    console.log("trad", this.state);
    if (this.state.illustration === true){
      infoView = <p>Most of my illustration takes a mixed media approach, mainly through pen and watercolor.</p>
      imageView = <div>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    if (this.state.sketches === true) {
      infoView = <div><p>Quick sketches, although fun to draw, are not necessarily the best example of what an artist can offer in terms of skill. What they can show is thought process. I hope you like them.</p></div>
      imageView = <div>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    console.log(this.state)
    return (
      <div className="flexWrapperForSecondNav">
        <ul className="innerWrapper" >
          <li className="secondNavButtons" onClick={this.sketchesPage}>sketches</li>
          <li className="secondNavButtons"  onClick={this.illustrationPage}>illustration</li>
        </ul>
        
        <section className="TradViewer">
          <div className="infoHolder">
          {infoView}
        </div>
          <div className="imageHolderTwo imageViewStyle">
          {imageView}
        </div>
        </section>
      </div>
    )
  }
}
export default PortfolioSecondNav;
