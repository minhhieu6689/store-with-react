import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { loadUser } from '../../actions/userAction'
import PropTypes from 'prop-types'

class User extends Component {
    state = {
        users: [],
        email: null,
        password: null,
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) => {
        var self = this;
        e.preventDefault();
        let token = Cookies.get('token');
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        let data = JSON.stringify({
            Email: this.state.email,
            PasswordHash: this.state.password
        })
        axios.post(
            'https://localhost:44379/api/Users/Register',
            {
                Email: this.state.email,
                PasswordHash: this.state.password
            },
            config
        )
            .then((response) => {
                console.log(response)
            })
            .catch()
    }
    componentWillMount() {
        this.props.loadUser();
    }
    componentWillReceiveProps(nextProps){
        console.log(12);
        console.log(nextProps);
        if(nextProps.user){
            
            this.props.users.add(nextProps.user);
            console.log(this.props.users);
        }
    }
    componentDidMount() {
        this.props.loadUser();
    }
    render() {
        const { users } = this.props;
        const userList = users.length ? (
            users.map(user => {
                return (
                    <tr key={user.id}>
                        <td className="serial">1.</td>
                        <td className="avatar">
                            <div className="round-img">
                                <a href="#"><img className="rounded-circle" src="images/avatar/1.jpg" alt="" /></a>
                            </div>
                        </td>
                        <td> #5469 </td>
                        <td> <span className="name">{user.email} </span> </td>
                        <td> <span className="name">{user.roleId == 1 ? "Admin" : "User"}</span> </td>
                        <td>
                            <Link to={'/user/'+user.id} className="btn btn-outline-primary btn-sm"><i className="fa fa-star"></i>&nbsp; Edit</Link>
                            <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fa fa-lightbulb-o"></i>&nbsp; Delete</button>
                        </td>
                    </tr>
                )
            })
        ) :
            (
                <div>No content</div>
            )
        return (
            <div className="content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Create new user</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.handelSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-form-label">Email:</label>
                                                <input type="email" className="form-control" placeholder="Email" id="email" onChange={this.handelChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Password:</label>
                                                <input type="password" className="form-control" placeholder="Password" id="password" onChange={this.handelChange} />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary">Create</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Table Employee</strong>
                                <div className="float-right">
                                    <Link to={'/user/add'} className="btn btn-outline-primary btn-sm"><i className="fa fa-star"></i>&nbsp; Create</Link>
                                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Create new</button> */}
                                </div>
                            </div>
                            <div className="table-stats order-table ov-h">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th className="serial">#</th>
                                            <th className="avatar">Avatar</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userList}
                                    </tbody>
                                </table>
                            </div> {/* /.table-stats */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
User.propTypes ={
    loadUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    user: PropTypes.object

}
const mapStateToProps =(state) =>{
    return {
        users: state.users,
        user: state.user
    }
}

export default connect(mapStateToProps, {loadUser})(User);