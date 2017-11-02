import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

export class Navbar extends React.Component{
    render() {
        return (
            <Router>
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
                                <Link to="/about">
                                    <div className="menu-item">
                                        <div className="menu-text">
                                            About
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/menu">
                                    <div className="menu-item">
                                        <div className="menu-text">
                                            Menu
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/support">
                                    <div className="menu-item">
                                        <div className="menu-text">
                                            Support
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
            </Router>
        )
    }
}