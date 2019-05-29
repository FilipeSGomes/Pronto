import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (

      <header>
        <Nav />
        <div className="head">
          <h1> O seu tempo.< br /> Valorizado.</h1>
          <p> Aguardar atendimento médico, em uma <br /> realidade <b> mais fácil e rápida </b> </p>

          <div>
            <div><a className="contact">Contact Us</a></div>
          </div>
        </div>

      </header>

    );
  }
}

export default Header;
