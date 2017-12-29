import mongoose from 'mongoose';

import config from "../../etc/config.json";

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost:27017/notes', {useMongoClient: true});
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Data()
    });

    return note.save()
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}