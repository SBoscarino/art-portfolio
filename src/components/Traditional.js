import React, {Component} from 'react';
import '../styles/TraditionalNav.css';
import PortfolioSecondNav from '../components/PortfolioSecondNav.js';

class Traditional extends Component {
  constructor(props){
    super();

    this.state = {
      watercolor: true,
      nsfw: false,
      threeDee: false,
      drawings: false,
      illustration: false
    }
    this.nsfwPage = this.nsfwPage.bind(this);
    this.watercolorPage = this.watercolorPage.bind(this);
    this.threedeePage = this.threedeePage.bind(this);
    this.illustrationPage = this.illustrationPage.bind(this);
    this.drawingsPage = this.drawingsPage.bind(this);
  }
  nsfwPage(event){
    this.setState({
      watercolor: false,
      nsfw: true,
      threeDee: false,
      drawings: false,
      illustration: false
    });
  }
  watercolorPage(){
    this.setState({
      watercolor: true,
      nsfw: false,
      threeDee: false,
      drawings: false,
      illustration: false
    });
  }
  threedeePage(){
    this.setState({
      watercolor: false,
      nsfw: false,
      threeDee: true,
      drawings: false,
      illustration: false
    });
  }
  drawingsPage(){
    this.setState({
      watercolor: false,
      nsfw: false,
      threeDee: false,
      drawings: true,
      illustration: false
    });
  }
  illustrationPage(){
    this.setState({
      watercolor: false,
      nsfw: false,
      threeDee: false,
      drawings: false,
      illustration: true
    });
  }

  render(){
    let TraditionalView;
    console.log(this.state)
    return (
      <div>
        <section className="TradSideNav">
          <PortfolioSecondNav />
        </section>
        <div className="imageHolder">
          {TraditionalView}
        </div>
      </div>
    )
  }
}
export default Traditional;
