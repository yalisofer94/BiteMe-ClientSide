import React ,{ Component} from 'react';
import Footer from './Footer';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';
import "./App.css";

class Login extends Component {
    render() {
        return(
            <div>
                <Logo />
                    <div className="home-content">
                        <Grid container alignItems="center" justify="center" spacing={0} direction="column">
                            <h2>Login Your Account</h2>
                            <form>
                                <div>
                                    <label htmlFor="userLoginEmail">Email</label>
                                    <input type="email" className="forms" id="userLoginEmail" placeholder="Email" onChange={(e) => this.setState({userLoginEmail: e.target.value})} />
                                </div>
                                <div>
                                    <label htmlFor="userLoginPassword">Password</label>
                                    <input type="password" className="forms" id="userLoginPassword" placeholder="Password" onChange={(e) => this.setState({userLoginPassword: e.target.value})} />
                                </div>
                                <button type="submit" className="btn" onClick={this.handleLoginNowBtn}><b>Login Now</b></button>
                            </form>
                            <p>Don't have an account yet? <span className="cursor-pointer text-warning" onClick={this.handleForms}>Create an Account</span></p>
                        </Grid>
                    </div>
                <Footer />
            </div>    
        )
    }
}

 export default Login;