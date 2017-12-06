import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

export class Navbar extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="navtop-main">
                            <h1>NAVBAR</h1>
                        </div>
                    </nav>
                    
                    <div className="container-header">
                        <div className="container-header-items">
                            <div className="container-items">
                                <div className="logo">
                                    <Link to="/">
                                        <div className="box-icon-logo">
                                            <div className="item-logo"></div>
                                            <div className="item-logo"></div>
                                            <div className="item-logo"></div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="btn-close">
                                    <div className="icon-item"></div>
                                    <div className="icon-item"></div>
                                    <div className="icon-item"></div>
                                </div>
                                <div className="item">
                                    <Link to="/notes">
                                        <div className="menu-item">
                                            <div className="menu-text">
                                                Notes
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="/helpdesk">
                                        <div className="menu-item">
                                            <div className="menu-text">
                                                HelpDesk
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="/admin">
                                        <div className="menu-item">
                                            <div className="menu-text">
                                                admin
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}