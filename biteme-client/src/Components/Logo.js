import React, { Component } from "react";
import logo from '../Images/logo.png'
import "./App.css";

class Logo extends Component {
    render() {
      return (
          <>
          <div style={{justifyContent: 'left', marginLeft: '8%'}}>
            <img src={logo} alt="Logo"/>
          </div>
          </>
      )
      }
    }

export default Logo;