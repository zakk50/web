import React from 'react';
import createReactClass from 'create-react-class';

const NoteEditor = createReactClass({
    getInitialState() {
        return{
            title: '',
            text: '',
            color: '#ffffff',
        };
    },
    handleTextChange(event) {
        this.setState({ text: event.target.value});
    },
    handleTitleChange(event) {
        this.setState({ title: event.target.value});
    },
    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color,
        };
        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#ffffff'});
    },
    render() {
        return(
            <div className="NoteEditor">
                <input 
                    type='text'
                    className="NoteEditor_title"
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea 
                    className="NoteEditor_text"
                    placeholder='Enter note text'
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="NoteEditor_footer">
                    <button
                        className="NoteEditor_button"
                        disable={this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default NoteEditor;

// const NotesEditor = React.Component({
//     getInitialState() {
//         return{
//             title: '',
//             text: '',
//             color: '#ffffff',
//         };
//     },
//     handleTextChange(event) {
//         this.setState({text: event.targe.value});
//     },
//     handleTitleChange(event) {
//         this.setState({title: event.target.value});
//     },
//     handleNoteAdd() {
//         const newNote = {
//             title: this.state.title,
//             text: this.state.text,
//             color: this.state.color
//         };
//          this.props.onNoteAdd(newNote);
//          this.setState({ text: '', title: '', color: '#ffffff'});
//     },
//     render() {
//         return(
//             <div className="NoteEditor">
//                 <input
//                     type='text'
//                     className='NoteEditor_title'
//                     placeholder='Enter title'
//                     value={this.state.title}
//                     onChange={this.handleTitleChange}
//                 />
//             </div>
//         );
//     }
// })