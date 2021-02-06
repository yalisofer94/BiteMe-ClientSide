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
            token: googleData.tokenId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        console.log("hahah", data);
        // store returned user somehow
      }

        return(
            <div>
                <Logo />
                    <div className="home-content">
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column" style={{height:'100%'}}>
                            <h1 style={{marginBottom:'5%'}}>Login Your Account</h1>
                            <div style={{width:'100%',display: 'block', textAlign: 'center'}}>
                            <form style={{ display: 'inline-block', marginLeft: 'auto',marginRight: 'auto',textAlign: 'left'}}>
                                <div style={{marginBottom:'5%', width:'300px'}}>
                                    <TextField id="outlined-basic" type="text" label="UserName" id="userLoginEmail" variant="outlined" onChange={(e) => setLoginUsername(e.target.value)}/>
                                </div>
                                <div style={{marginBottom:'5%'}}>
                                    <TextField id="outlined-password-input" label="Password" id="userLoginPassword" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => setLoginPassword(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn" style={{marginBottom:'5%'}} onClick={login}><b>Login Now</b></button>
                            </form>
                            </div>
                            <div style={{width:'100%',display: 'block', textAlign: 'center'}}>
                                <p>Want to <a style={{color:'black', fontSize:'15px', paddingLeft:'-1%',paddingRight:'4%' ,fontWeight:'bold'}}href='/register'>Register?</a></p>
                            </div>
                            <GoogleLogin
                            clientId='102550194646-3l50npk3904rspfubhe612nttft9nt36.apps.googleusercontent.com'
                            buttonText="Log in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleLogin}
                            cookiePolicy={'single_host_origin'}
                            />
                        </Grid>
                    </div>
                <Footer /> 
            </div>    
        )
}


 export default Login;