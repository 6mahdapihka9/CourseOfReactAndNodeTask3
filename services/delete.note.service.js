const getNotesData = require('../repositories/get.notes.data.js');
const updateNotesData = require("../repositories/update.notes.data");

const deleteNoteService = (req, res) => {
    if (!req.body)
        return res.sendStatus(400).send("Error. Note's data not found!");

    let notes = getNotesData();

    if (!notes.some(note => note.id === req.params["id"]))
        return res.sendStatus(400).send("Error. There is no such note!");

    notes.splice(notes.findIndex(n => n.id === req.params["id"]), 1);

    updateNotesData(notes);

    res.send('Note deleted successfully!');
};

module.exports = { deleteNoteService };
