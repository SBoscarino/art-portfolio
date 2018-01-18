import React, {Component} from 'react';


// This component contains the SECOND navigation menu only accessible by clicking on "traditional" in the main portfolio navigation menu
class PortfolioSecondNav extends Component {
  render(){
    return (
      <div className="flexWrapperForSecondNav">
        <ul className="innerWrapper">
          <li>Drawings</li>
          <li>Illustration</li>
        </ul>
        <ul className="innerWrapper">
          <li>Children's Illustration</li>
        </ul>
      </div>
    )
  }
}
export default PortfolioSecondNav;
