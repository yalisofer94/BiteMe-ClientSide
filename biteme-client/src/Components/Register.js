import React ,{ useState} from 'react';
import Footer from './Footer';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import "./App.css";
import {Button} from '@material-ui/core';


function Register (props) {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        if(registerEmail === '' || registerPassword === '' || registerUsername === ''){
            alert("Please fill all fields");
        } else {
        Axios({
            method: "POST",
            data: {
            email: registerEmail,
            username: registerUsername,
            password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/api/user/register",
        }).then((res) => {
            if(res.data.msg === "User Already Exists"){
                window.location = '/';
            }
            else{            
                window.location = '/';
            }
        });
    }
};       

    return(
            <div>
                <Logo />
                    <div className="home-content">
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h1 style={{marginBottom:'2%'}}>Sign Up</h1>
                            <div style={{width:'100%',display: 'block', textAlign: 'center'}}>
                            <form style={{ display: 'inline-block'}}>
                                <div style={{marginBottom:'5%', width:'300px'}}>
                                    <TextField id="outlined-basic" label="user" type="text" id="userLoginEmail" variant="outlined" onChange={(e) => setRegisterUsername(e.target.value)}/>
                                </div>
                                <div style={{marginBottom:'5%'}}>
                                    <TextField id="outlined-basic" label="Email" id="userLoginEmail" type="email" variant="outlined" onChange={(e) => setRegisterEmail(e.target.value)}/>
                                </div>
                                <div style={{marginBottom:'5%'}}>
                                    <TextField id="outlined-password-input" label="Password" id="userLoginPassword" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => setRegisterPassword(e.target.value)}/>
                                </div>
                                <Button onClick={register} variant="contained" color="primary" style={{marginBottom:'5%'}} ><b>Register Now</b></Button>
                            </form>
                            </div>
                            <div style={{width:'100%',display: 'block', textAlign: 'center'}}>
                            <a style={{marginTop:'1%', color:'black', fontSize:'15px'}}href='/'>Back to <strong>Login</strong></a>
                            </div>
                        </Grid>
                    </div>
                <Footer />
            </div>    
        )
}

 export default Register;