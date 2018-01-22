import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div className="wrapperDiv">
        <nav>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Home">home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Portfolio">portfolio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Bio">bio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">contact</NavLink>
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
