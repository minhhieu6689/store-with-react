import React, { Component } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import {connect} from 'react-redux'
import { addUser } from '../../../actions/userAction.js'
import PropTypes from 'prop-types'
import UserPage from '../../Page/UserPage.js';

class UserAdd extends Component {
    state = {
        email: null,
        password: null,
    }
    componentDidMount() {
        let id = this.props.match.params.user_id;
        console.log(id);
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) => {
        var self = this;
        e.preventDefault();
        this.props.addUser(this.state.email,this.state.password);
        this.props.history.push('/user');
    }
    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>Horizontal</strong> Form
                            </div>
                            <div className="card-body card-block">
                                <form onSubmit={this.handelSubmit} className="form-horizontal">
                                    <div className="row form-group">
                                        <div className="col col-md-3"> <label htmlFor="email" className="col-form-label">Email:</label></div>
                                        <div className="col-12 col-md-9"><input type="email" className="form-control" placeholder="Email" id="email" onChange={this.handelChange} /><span className="help-block">Please enter your email</span></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col col-md-3"><label htmlFor="message-text" className="col-form-label">Password:</label></div>
                                        <div className="col-12 col-md-9"><input type="password" className="form-control" placeholder="Password" id="password" onChange={this.handelChange} /><span className="help-block">Please enter your password</span></div>
                                    </div>
                                    <div className="">
                                        <button type="submit" className="btn btn-primary btn-sm">
                                            Create
                                        </button>
                                        <button type="reset" className="btn btn-danger btn-sm">
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    users: state.users,
    user: state.user
});
export default connect(mapStateToProps,{addUser})(UserAdd);