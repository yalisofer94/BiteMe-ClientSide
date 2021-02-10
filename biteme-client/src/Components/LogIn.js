import React ,{ useState } from 'react';
import Footer from './Footer';
import LabelBottomNavigation from './Navbar';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Axios from "axios";
import GoogleLogin from 'react-google-login';
import "./App.css";

function Login() {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [userToken, setUserToken] = useState("");

    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/api/user/login",
        }).then((res) => {
            console.log(res);
            if(res.status === 200) {
                window.location = '/home';
            }
        });
      };

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
        console.log(res.cookies);
        if(res.status === 200){
          if(data === "User don't exist"){
            window.location = '/register';  
          }else{
            window.location = '/home';
          }
        } else {
          alert("Some error occurred");
        }
      }

        return(
            <div>
                <Logo />
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
                <Footer /> 
            </div>    
        )
}

 export default Login;