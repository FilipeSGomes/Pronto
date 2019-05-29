import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">Pr<span>onto</span></li>
        </ul>
        <ul>
          <li><a href="#">Entrar</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
