import React, { Component } from 'react';
import LeftPanel from '../components/LeftPanel/LeftPanel.js';
import Header from '../components/RightPanel/Header.js';
import DashBoard from '../components/RightPanel/DashBoard.js';
import Footer from '../components/RightPanel/Footer.js';
class Home extends Component {
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
                   <DashBoard/>
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

export default Home;