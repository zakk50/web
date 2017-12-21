import React from 'react';

import NotesEditor from './notes/notesEditor';
import NotesGrid from './notes/notesGrid';

const App = props => (
    <div className="App">
        <h2 className="App_header">NotesApp</h2>
        <NotesEditor />
        <NotesGrid />
    </div>
)

export default App;