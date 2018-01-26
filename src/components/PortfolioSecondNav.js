import React, {Component} from 'react';
import '../styles/PortfolioNav.css';
import LionFillerImage from '../images/LionFillerImage.jpg';

//sketchesPage
import anotherDoggo from '../images/portfolioImages/sketches/anotherDoggo.jpg';
import creeperSketch from '../images/portfolioImages/sketches/creeperSketch.jpg';
import creeperSketch3 from '../images/portfolioImages/sketches/creeperSketch3.jpg';
import creeperSketch4 from '../images/portfolioImages/sketches/creeperSketch4.jpg';
import creeperSketch2 from '../images/portfolioImages/sketches/creeperSketch2.jpg';
import crowSketches from '../images/portfolioImages/sketches/crowSketches.jpg';
import dino from '../images/portfolioImages/sketches/dino.jpg';
import merTiger from '../images/portfolioImages/sketches/merTiger.jpg';
import pupperSketch from '../images/portfolioImages/sketches/pupperSketch.jpg';
import sketchPage from '../images/portfolioImages/sketches/sketchPage.jpg';
//illustration
import angryBoye from '../images/portfolioImages/illustration/angryBoye.jpg';
import candleBearer from '../images/portfolioImages/illustration/candleBearer.jpg';
import characterSketch from '../images/portfolioImages/illustration/characterSketch.jpg';
import coolBirb from '../images/portfolioImages/illustration/coolBirb.jpg';
import dino2 from '../images/portfolioImages/illustration/dino2.jpg';
import draggo from '../images/portfolioImages/illustration/draggo.jpg';
import draggo2 from '../images/portfolioImages/illustration/draggo2.jpg';
import dude from '../images/portfolioImages/illustration/dude.jpg';
import fooPupper from '../images/portfolioImages/illustration/fooPupper.jpg';
import fooPupper2 from '../images/portfolioImages/illustration/fooPupper2.jpg';
import moose from '../images/portfolioImages/illustration/moose.jpg';
import mtgTiger from '../images/portfolioImages/illustration/mtgTiger.jpg';
import ocelot from '../images/portfolioImages/illustration/ocelot.jpg';
import pansLabyrinthFaun from '../images/portfolioImages/illustration/pansLabyrinthFaun.jpg';
import proudTrico from '../images/portfolioImages/illustration/proudTrico.jpg';
import pupperBones from '../images/portfolioImages/illustration/pupperBones.jpg';
import skully from '../images/portfolioImages/illustration/skully.jpg';
import thingScribble from '../images/portfolioImages/illustration/thingScribble.jpg';
import tigerSwordsman from '../images/portfolioImages/illustration/tigerSwordsman.jpg';
import trashDove from '../images/portfolioImages/illustration/trashDove.jpg';
import trico3 from '../images/portfolioImages/illustration/trico3.jpg';
import tricoWithBoye from '../images/portfolioImages/illustration/tricoWithBoye.jpg';
import waterDragon from '../images/portfolioImages/illustration/waterDragon.jpg';
import winterIsHere from '../images/portfolioImages/illustration/winterIsHere.jpg';

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
        <img className="LionFiller singleImage" alt="lion filler" src={angryBoye}/>
        <img className="LionFiller singleImage" alt="lion filler" src={candleBearer}/>
        <img className="LionFiller singleImage" alt="lion filler" src={coolBirb}/>
        <img className="LionFiller singleImage" alt="lion filler" src={dino2}/>
        <img className="LionFiller singleImage" alt="lion filler" src={draggo}/>
        <img className="LionFiller singleImage" alt="lion filler" src={draggo2}/>
        <img className="LionFiller singleImage" alt="lion filler" src={dude}/>
        <img className="LionFiller singleImage" alt="lion filler" src={tricoWithBoye}/>
        <img className="LionFiller singleImage" alt="lion filler" src={fooPupper}/>
        <img className="LionFiller singleImage" alt="lion filler" src={fooPupper2}/>
        <img className="LionFiller singleImage" alt="lion filler" src={moose}/>
        <img className="LionFiller singleImage" alt="lion filler" src={mtgTiger}/>
        <img className="LionFiller singleImage" alt="lion filler" src={ocelot}/>
        <img className="LionFiller singleImage" alt="lion filler" src={pansLabyrinthFaun}/>
        <img className="LionFiller singleImage" alt="lion filler" src={proudTrico}/>
        <img className="LionFiller singleImage" alt="lion filler" src={pupperBones}/>
        <img className="LionFiller singleImage" alt="lion filler" src={skully}/>
        <img className="LionFiller singleImage" alt="lion filler" src={thingScribble}/>
        <img className="LionFiller singleImage" alt="lion filler" src={tigerSwordsman}/>
        <img className="LionFiller singleImage" alt="lion filler" src={trashDove}/>
        <img className="LionFiller singleImage" alt="lion filler" src={trico3}/>
        <img className="LionFiller singleImage" alt="lion filler" src={waterDragon}/>
        <img className="LionFiller singleImage" alt="lion filler" src={winterIsHere}/>
      </div>
    }
    if (this.state.sketches === true) {
      infoView = <div><p>Quick sketches, although fun to draw, are not necessarily the best example of what an artist can offer in terms of skill. What they can show is thought process. I hope you like them.</p></div>
      imageView = <div>
        <img className="LionFiller singleImage" alt="heres a dog" src={anotherDoggo}/>
        <img className="LionFiller singleImage" alt="lion filler" src={creeperSketch}/>
        <img className="LionFiller singleImage" alt="lion filler" src={creeperSketch2}/>
        <img className="LionFiller singleImage" alt="lion filler" src={creeperSketch3}/>
        <img className="LionFiller singleImage" alt="lion filler" src={creeperSketch4}/>
        <img className="LionFiller singleImage" alt="lion filler" src={dino}/>
        <img className="LionFiller singleImage" alt="lion filler" src={merTiger}/>
        <img className="LionFiller singleImage" alt="lion filler" src={pupperSketch}/>
        <img className="LionFiller singleImage" alt="lion filler" src={sketchPage}/>
        <img className="LionFiller singleImage" alt="lion filler" src={crowSketches}/>
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
