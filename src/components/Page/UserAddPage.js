import React, { Component } from 'react';
import LeftPanel from '../../components/LeftPanel/LeftPanel.js';
import Header from '../../components/RightPanel/Header.js';
import Footer from '../../components/RightPanel/Footer.js';
import UserAdd from '../../components/Function/User/UserAdd.js';

class UserAddPage extends Component {

    state = {
        id: null
    }
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
                        <UserAdd/>
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

export default UserAddPage;