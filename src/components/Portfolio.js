import React, {Component} from 'react';
import PortfolioNav from '../components/PortfolioNav.js';

//contains the top view of the portfolio navigation and the area that will contain the image section.
class Portfolio extends Component {

  render(){
    return (
      <div>
        <h1>Portfolio</h1>
        <PortfolioNav PortfolioNav={this.props.PortfolioNav} />
        <section className="secondNavWrapper">
          <section className="imageWrapper">

          </section>
        </section>
      </div>
    )
  }
}
export default Portfolio;
