const noteIdCheckerService = require("../../services/note.id.checked");
const readNotesData = require("../../repositories/read.notes");

const readNoteMiddleware = (req, res) => {
    let error = noteIdCheckerService(readNotesData(), req.params["id"]);
    if (error)
        return res.sendStatus(error.status).send(error.message);

    res.send(readNotesData().find(note => note.id === req.params["id"]));
};

module.exports = readNoteMiddleware;

