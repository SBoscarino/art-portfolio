import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Home">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Portfolio">Portfolio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Bio">Bio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">Contact</NavLink>
        </nav>
          {this.props.children}
      </div>
    );
  }
}

export default MainNav;
