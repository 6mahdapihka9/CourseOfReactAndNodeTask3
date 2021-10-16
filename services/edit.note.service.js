const getDatesFromText = require('../heplers/date.finder.js');
const noteValidation = require('./note.validation.service.js');
const getNotesData = require('../repositories/get.notes.data.js');
const updateNotesData = require("../repositories/update.notes.data");

const editNoteService = (req, res) => {
    if (!req.body)
        return res.sendStatus(400).send("Error. Note's data not found!");

    if (!noteValidation(req.body.name, req.body.content, req.body.category))
        return res.sendStatus(422).send('Error. Note data invalid!');

    let notes = getNotesData();

    if (!notes.some(note => note.id === req.params["id"]))
        return res.sendStatus(400).send("Error. There is no such note!");

    notes.splice(notes.findIndex(n => n.id === req.params["id"]), 1, {
        id: req.params["id"],
        name: req.body.name,
        created:  new Date(),
        category: req.body.category,
        content: req.body.content,
        dates: getDatesFromText(req.body.content),
        archived: req.body.archived
    });

    updateNotesData(notes);
    res.send('Note updated successfully!');
};

module.exports = { editNoteService };
