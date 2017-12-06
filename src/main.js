import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route} from 'react-router-dom';

import App from '../src/components/app.jsx';
import {Navbar} from '../src/components/navbar/navbar';
import {Admin} from '../src/components/Admin/admin';
import {Note} from '../src/components/notes/note';
import {HelpDesk} from '../src/components/helpdesk/helpdesk';

// import { NotesEditor } from './components/notes/notesEditor';
// import { NotesGrid } from './components/notes/notesGrid';

ReactDOM.render(
    <div>
        <Navbar />
    </div>, document.getElementById('react-navbar')
);

ReactDOM.render(
    <div>
        <App />
            <Router>
                <div>
                    {/* <Route exact path="/"  component={Admin}/> */}
                    <Route path="/notes" component={Note}/>
                    <Route path="/helpdesk" component={HelpDesk}/>
                    <Route path="/admin" component={Admin}/>
                </div>
            </Router>
    </div>, document.getElementById('react-container')
);