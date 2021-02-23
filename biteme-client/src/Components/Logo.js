import React, { Component } from "react";
import logo from '../Images/logo.png';
import {useHistory} from "react-router-dom";
import "./App.css";

class Logo extends Component {
  constructor(props){
    super(props)
    this.onclicking = this.onclicking.bind(this);
  }
  
    onclicking = () => {
      const { history } = this.props;
      if(history) history.push('/home');
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