import React from 'react';
import createReactClass from 'create-react-class';

const Interface = createReactClass({
    render(){
        return(
            <div>
                <header>
                    Шапка
                </header>
                <div className="container-header">
                    <div className="container-header-items">
                        <div className="container-items">
                            {/* <div className="btn-close">
                                <div className="icon-item"></div>
                                <div className="icon-item"></div>
                                <div className="icon-item"></div>
                            </div> */}
                            <div className="item">
                                                {/* <Link to="/notes"> */}
                                                    <div className="menu-item">
                                                        <div className="menu-text">
                                                            <h1>Notes</h1>
                                                        </div>
                                                    </div>
                                                {/* </Link> */}
                            </div>
                            <div className="item">
                                                {/* <Link to="/helpdesk"> */}
                                                    <div className="menu-item">
                                                        <div className="menu-text">
                                                            HelpDesk
                                                        </div>
                                                    </div>
                                                {/* </Link> */}
                            </div>
                            <div className="item">
                                                {/* <Link to="/admin"> */}
                                                    <div className="menu-item">
                                                        <div className="menu-text">
                                                            admin
                                                        </div>
                                                    </div>
                                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Interface;