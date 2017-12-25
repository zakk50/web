import React from 'react';
import createReactClass from 'create-react-class';

import NoteEditor from './noteEditor';
import NotesGrid from './notesGrid';
import Note from './note';
const App = createReactClass({
    handleNoteAdd(data) {
        console.log(data);
    },

    render(){
        return(
            <div className="app">
                <h2 className="App_header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid />
            </div>
        )
    }
});

export default App;