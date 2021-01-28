import React, { Component } from "react";
import logo from '../Images/logo.png'
import "./App.css";

class Logo extends Component {
    render() {
      return (
          <>
          <div style={{display:'inline-block',justifyContent: 'left', marginLeft: '8%'}}>
            <a href="http://localhost:3000/">
            <img src={logo} alt="Logo"/>
            </a>
            <a href="http://localhost:3000/login" style={{color:'red', fontSize:'30px' }}>
              Login!
            </a>
          </div>
          <div style={{display:'inline-block', justifyContent: 'right' }}>
           
          </div>
          </>
      )
      }
    }

export default Logo;