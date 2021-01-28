import React ,{ useState } from 'react';
import Footer from './Footer';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Axios from "axios";
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
            if(res.status === 200) {
                window.location = 'http://localhost:3000/';
            }
        });
      };

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
                                <p>Want to <a style={{color:'black', fontSize:'15px', paddingLeft:'-1%',paddingRight:'4%' ,fontWeight:'bold'}}href='http://localhost:3000/register'>Register?</a></p>
                            </div>
                        </Grid>
                    </div>
                <Footer />
            </div>    
        )
}


 export default Login;