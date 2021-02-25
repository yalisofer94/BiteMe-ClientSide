import React, { Component } from "react";
import logo from '../Images/logo.png';
import "./App.css";

class Logo extends Component {
  constructor(props){
    super(props)
    this.onclicking = this.onclicking.bind(this);
  }
  
    onclicking = () => {
      window.location = '/home'
    }  
    render() {
      return (
          <>
          <div style={{display:'inline-block',justifyContent: 'left', marginLeft: '8%'}}>
            <a onClick={this.onclicking}> 
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