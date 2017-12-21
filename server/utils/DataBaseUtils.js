import mongoose from 'mongoose';

import '../modules/Note';

import config from '../../etc/config.json';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost:${config.db.port}/notes');
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createNote: new Data()
    });

    return note.save()
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}