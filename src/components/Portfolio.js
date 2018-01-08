import React, {Component} from 'react';
import PortfolioNav from '../components/PortfolioNav.js';
import PortfolioImages from '../components/PortfolioImages.js';

class Portfolio extends Component {

  render(){
    return (
      <div>
        <h1>Portfolio</h1>
        <PortfolioNav PortfolioNav={this.props.PortfolioNav} />
        <section className="imageWrapper">
          <PortfolioImages PortfolioImages={this.props.PortfolioImages} />
        </section>
      </div>
    )
  }
}
export default Portfolio;
