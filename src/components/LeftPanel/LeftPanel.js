import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
class LeftPanel extends Component {
    render() {
        return (
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/"><i className="menu-icon fa fa-laptop" />Dashboard</NavLink>
                            </li>
                            <li className="menu-title">Store Management</li>{/* /.menu-title */}
                            <li>
                                <NavLink to="/user"><i className="menu-icon ti-email" />User</NavLink>
                            </li>
                            <li>
                                <NavLink to="/department"><i className="menu-icon ti-email" />Department</NavLink>
                            </li>
                        </ul>
                    </div>{/* /.navbar-collapse */}
                </nav>
            </aside>
        );
    }
}

export default LeftPanel;