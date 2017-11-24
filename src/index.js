import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar} from '../src/components/navbar/navbar';
import {MainBox} from '../src/components/mainbox';
import {Home} from '../src/components/home';
import {Notes} from '../src/components/notes/notes';
import {Menu} from '../src/components/menu';
import {Support} from '../src/components/support';
import {Admin} from '../src/components/admin';

import { HashRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <div>
        <Navbar />
    </div>, document.getElementById('react-navbar')
);

ReactDOM.render(
    <div>
        <MainBox />
            <Router>
                <div>
                    <Route exact path="/"  component={Home}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/notes" component={Notes}/>
                    <Route path="/support" component={Support}/>
                    <Route path="/admin" component={Admin}/>
                </div>
            </Router>
    </div>, document.getElementById('react-container')
);