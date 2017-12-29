import express from 'express';
import bodyParser from 'body-parser';

import config from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();

app.get ('/', (req, res) => {
    res.send('Hi');
})

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});
app.delete('/notes:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.data);
});

const server = app.listen(config.server, ()=> {
    console.log('Server is up and runnig on port config ' + config.server);
})