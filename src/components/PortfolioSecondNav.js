import React, {Component} from 'react';


// This component contains the SECOND navigation menu only accessible by clicking on "classic" in the main portfolio navigation menu
class PortfolioSecondNav extends Component {
  render(){
    return (
      <div className="flexWrapperForSecondNav">
        <ul>
          <li>NSFW</li>
          <li>Watercolor</li>
          <li>3D</li>
          <li>Drawings</li>
          <li>Illustration</li>
        </ul>
      </div>
    )
  }
}
export default PortfolioSecondNav;
