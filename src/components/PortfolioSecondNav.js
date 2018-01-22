import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import LionFillerImage from '../images/LionFillerImage.jpg';



// This component contains the SECOND navigation menu only accessible by clicking on "traditional" in the main portfolio navigation menu
class PortfolioSecondNav extends Component {
  constructor(){
    super();

    this.state = {
      threeDee: false,
      sketches: false,
      illustration: false,
      childrensIllustration: false
    }
    this.childrensIllustrationPage = this.childrensIllustrationPage.bind(this);
    this.threeDeePage = this.threeDeePage.bind(this);
    this.illustrationPage = this.illustrationPage.bind(this);
    this.sketchesPage = this.sketchesPage.bind(this);
  }
  childrensIllustrationPage(){
    this.setState({
      childrensIllustration: true,
      threeDee: false,
      sketches: false,
      illustration: false
    });
  }
  threeDeePage(){
    this.setState({
      childrensIllustration: false,
      threeDee: true,
      sketches: false,
      illustration: false
    });
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
    if (this.state.illustration === true){
      infoView = <p>Most of my illustration takes a mixed media approach, mainly through pen and watercolor.</p>
      imageView = <div>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    if (this.state.sketches === true) {
      infoView = <div><p>Quick sketches, although fun to draw, are not necessarily the best example of what an artist can offer in terms of skill. What they can show is thought process. I hope you like them.</p></div>
      imageView = <div>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    if (this.state.threeDee === true) {
      infoView = <div><p>I work with a range of materials like metals, papier mache and clay.</p></div>
      imageView = <div>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    if (this.state.childrensIllustration === true) {
      infoView = <div><p>Work appropriate for children's books.</p></div>
      imageView = <div>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage} className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
        <img style={singleImage}className="LionFiller" alt="lion filler" src={LionFillerImage}/>
      </div>
    }
    console.log(this.state)
    return (
      <div className="flexWrapperForSecondNav">
        <ul className="innerWrapper" >
          <li><button onClick={this.sketchesPage}>sketches</button></li>
          <li><button onClick={this.illustrationPage}>Illustration</button></li>
        </ul>
        <ul className="innerWrapper">
          <li><button onClick={this.threeDeePage}>3D</button></li>
          <li><button onClick={this.childrensIllustrationPage}>Childrens Illustration</button></li>
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
