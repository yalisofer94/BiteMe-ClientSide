import React ,{ Component} from 'react';
import Footer from './Footer';
import Logo from './Logo';

class Login extends Component {
    render() {
        return(
            <div>
                <Logo />
                <div className="container-fluid register-cont1">
                    <div className="">
                        <div className="container register-cont1-text">
                            <h1 className="text-uppercase text-white text-center mb-4"><strong>User Login / Register</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
                            <h2 className="text-center mb-4">Create an Account</h2>
                            <form action="javascript:void(0)">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userFullName">Full Name</label>
                                        <input type="text" className="form-control" id="userName" placeholder="Full Name" onKeyUp={(e) => this.handleUserName(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userEmail">Email</label>
                                        <input type="email" className="form-control" id="userEmail" placeholder="Email" onKeyUp={(e) => this.handleUserEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userPassword">Password</label>
                                        <input type="password" className="form-control" id="userPassword" placeholder="Password" onKeyUp={(e) => this.handleUserPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userConfirmPassword">Confirm Password</label>
                                        <input type="password" className="form-control" id="userConfirmPassword" placeholder="Password" onKeyUp={(e) => this.handleUserConfirmPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userCity">City</label>
                                        <input type="text" className="form-control" id="userCity" onKeyUp={(e) => this.handleUserCity(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="userCountry">Country</label>
                                        <input type="text" className="form-control" id="userCountry" onKeyUp={(e) => this.handleUserCountry(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="userGender">Gender</label>
                                        <select id="userGender" className="form-control">
                                            <option defaultValue>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="userAge">Age</label>
                                        <input type="number" className="form-control" id="userAge" onKeyUp={(e) => this.handleUserAge(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <p className="mb-2">Profile Image</p>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="userProfileImage" onChange={this.handleUserProfileImage} />
                                            <label className="custom-file-label" htmlFor="userProfileImage"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="userTNC" />
                                        <label className="custom-control-label" htmlFor="userTNC">Accept Terms and Conditions</label>
                                    </div>
                                </div>
                                <p className="text-danger"></p>
                                <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={this.handleCreateAccountBtn}><b>Create an Account</b></button>
                            </form>
                            <p className="m-0">Already have an account? <span className="cursor-pointer text-warning" onClick={this.handleForms}>Login Here</span></p>
                        </div>
                </div>
                <Footer />
            </div>    
        )
    }
}

 export default Login;