import React, { Component } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import Auth from '../Tool/Authenticate.js'

class Login extends Component {
    state={
        email: null,
        password: null
    }
    handelChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) =>{
        var self = this;
        e.preventDefault();
        console.log(this.state);
        axios.post('https://localhost:44379/api/Login',{
           Email: this.state.email,
           PasswordHash: this.state.password
        })
        .then(function (response) {
            Cookies.set('token', response.data.token, { expires: 1 })
            Auth.authenticate();
            self.props.history.push('/');
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="sufee-login d-flex align-content-center flex-wrap">
            <div className="container">
              <div className="login-content">
                <div className="login-logo">
                  <a href="index.html">
                    <img className="align-content" src="images/logo.png" alt="" />
                  </a>
                </div>
                <div className="login-form">
                  <form onSubmit={this.handelSubmit}>
                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Email" id="email" onChange={this.handelChange} />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" id="password" onChange={this.handelChange} />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember Me
                      </label>
                      <label className="pull-right">
                        <a href="#">Forgotten Password?</a>
                      </label>
                    </div>
                    <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                    <div className="social-login-content">
                      <div className="social-button">
                        <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i className="ti-facebook" />Sign in with facebook</button>
                        <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i className="ti-twitter" />Sign in with twitter</button>
                      </div>
                    </div>
                    <div className="register-link m-t-15 text-center">
                      <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;