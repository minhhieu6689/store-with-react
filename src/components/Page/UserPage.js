import React, { Component } from 'react';
import LeftPanel from '../../components/LeftPanel/LeftPanel.js';
import Header from '../../components/RightPanel/Header.js';
import Footer from '../../components/RightPanel/Footer.js';
import User from '../../components/Content/User.js';
import { Switch, Route } from 'react-router-dom'
import UserAdd from '../Function/User/UserAdd.js';

class UserPage extends Component {
    render() {
        return (
            <div>
                {/* Left Panel */}
                <LeftPanel />
                {/* /#left-panel */}
                {/* Right Panel */}
                <div id="right-panel" className="right-panel">
                    {/* Header*/}
                    <Header />
                    {/* /#header */}
                    {/* Content */}
                    <Switch>
                        <Route path="/user/add" component={UserAdd} />
                        <Route path="/user" component={User} />
                    </Switch>
                    {/* /.content */}
                    <div className="clearfix" />
                    {/* Footer */}
                    <Footer />
                    {/* /.site-footer */}
                </div>
                {/* /#right-panel */}
                {/* Scripts */}
                {/*  Chart js */}
                {/*Chartist Chart*/}
                {/*Local Stuff*/}
            </div>
        );
    }
}

export default UserPage;