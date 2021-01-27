import React ,{ Component} from 'react';
import Footer from './Footer';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import "./App.css";

class Login extends Component {
    render() {
        return(
            <div>
                <Logo />
                    <div className="home-content">
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column" style={{height:'100%'}}>
                            <h1 style={{marginBottom:'5%'}}>Login Your Account</h1>
                            <div style={{width:'100%',display: 'block', textAlign: 'center'}}>
                            <form style={{ display: 'inline-block', marginLeft: 'auto',marginRight: 'auto',textAlign: 'left'}}>
                                <div style={{marginBottom:'5%', width:'300px'}}>
                                    {/* <label style={{paddingRight:'14%', fontSize:'20px', fontWeight:'bold'}}>Email</label>
                                    <input type="email" className="forms" id="userLoginEmail" placeholder="Email" style={{borderLeft:'1px solid'}}onChange={(e) => this.setState({userLoginEmail: e.target.value})} /> */}
                                    <TextField id="outlined-basic" label="Email" id="userLoginEmail" variant="outlined" />
                                </div>
                                <div style={{marginBottom:'5%'}}>
                                    {/* <label style={{fontSize:'20px', fontWeight:'bold'}}>Password</label>
                                    <input type="password" className="forms" id="userLoginPassword" placeholder="Password" style={{borderLeft:'1px solid'}} onChange={(e) => this.setState({userLoginPassword: e.target.value})} /> */}
                                    <TextField id="outlined-password-input" label="Password" id="userLoginPassword" type="password" autoComplete="current-password" variant="outlined"/>
                                </div>
                                <button type="submit" className="btn" style={{marginBottom:'5%'}} onClick={this.handleLoginNowBtn}><b>Login Now</b></button>
                            </form>
                            </div>
                        </Grid>
                    </div>
                <Footer />
            </div>    
        )
    }
}

 export default Login;