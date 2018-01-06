import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div classname="wrapperDiv">
        <nav>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Home">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Portfolio">Portfolio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Bio">Bio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">Contact</NavLink>
        </nav>
        <div className="wrapperForContent">
          {this.props.children}
        </div>
        <div className="footer">
          <p className="footerInfo">© 2018 Stefanie Boscarino</p>
        </div>
      </div>
    );
  }
}

export default MainNav;
