import React, { Component } from "react";
import logo from '../Images/logo.png';
import "./App.css";

class Logo extends Component {
    render() {
      return (
          <>
          <div style={{display:'inline-block',justifyContent: 'left', marginLeft: '8%'}}>
            <a href="/home">
            <img src={logo} alt="Logo"/>
            </a>
          </div>
          <div style={{display:'inline-block', justifyContent: 'right' }}>
          </div>
          </>
      )
      }
    }

export default Logo;