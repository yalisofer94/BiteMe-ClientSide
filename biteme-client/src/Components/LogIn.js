import React ,{ useState, useContext, useEffect } from 'react';
import Footer from './Footer';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';
import Axios from "axios";
import GoogleLogin from 'react-google-login';
import UserContext from '../UserContext';
import {useHistory} from "react-router-dom";
import "./App.css";

function Login() {
    const history = useHistory();
    const {userName, setUserName, userId, setUserId} = useContext(UserContext);
    


    React.useEffect(() => {
      const savedId = String(localStorage.getItem(userId) || '');
      const savedName = String (localStorage.getItem(userName) || '');
      setUserName(savedName);
      setUserId(savedId);
    }, [])
    
    useEffect(() => {
      if(userName !== '' && userId !== 0){
        console.log("1",userName, userId);
        let path = '/home';
        history.push({
          pathname: path,
          userId: localStorage.getItem(userId),
          userName: userName
        });
      }}, [userName, userId]);

      const handleLogin = async googleData => {
        const res = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId,
          }),
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        console.log(res.cookies, data);
        if(res.status === 200){
          if(data === "User don't exist"){
            window.location = '/register';  
          } else {
            setUserName(data.username);
            setUserId(data.id);
            localStorage.setItem("userId", data.id)
            localStorage.setItem("userName", data.username)
            localStorage.setItem("isAdmin", data.admin)
          }
        } else {
          alert("Some error occurred");
        }
      }
      
        return(
            <div>
                    <div className="home-content">
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column" style={{height:'100%'}}>
                            <h1 style={{marginBottom:'5%'}}>Login Your Account</h1>
                            <div style={{marginTop:'0.5%'}}>    
                            <GoogleLogin
                            clientId='102550194646-3l50npk3904rspfubhe612nttft9nt36.apps.googleusercontent.com'
                            buttonText="Log in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleLogin}
                            cookiePolicy={'single_host_origin'}
                            />
                            </div>
                            <a style={{marginTop:'1%', color:'black', fontSize:'15px'}}href='/register'>Want to <strong>Register?</strong></a>
                        </Grid>
                    </div>
            </div>    
        )
}

 export default Login;