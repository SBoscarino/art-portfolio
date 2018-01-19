import React, {Component} from 'react';
import '../styles/TraditionalNav.css';
import PortfolioSecondNav from '../components/PortfolioSecondNav.js';

class Traditional extends Component {
  render(){
    return (
      <div>
        <section className="TradSideNav">
          <PortfolioSecondNav />
        </section>
      </div>
    )
  }
}
export default Traditional;
