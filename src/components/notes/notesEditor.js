import React from 'react';

const NotesEditor = props => (
    <div>NotesEditor</div>
);

export default NotesEditor;

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