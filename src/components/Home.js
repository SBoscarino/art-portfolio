import React, {Component} from 'react';
import logo from '../images/logo.png';
import '../styles/home.css';

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Welcome to my art portfolio.</p>
        <img className="logo" src={logo}/>
      </div>
    )
  }
}
export default Home;
