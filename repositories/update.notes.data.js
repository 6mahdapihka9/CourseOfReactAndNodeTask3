const fs = require("fs");
const path = require('path');

const updateNotesData = notes => {
    fs.writeFileSync(path.join(__dirname, "../users.json"), JSON.stringify(notes));
    console.log(notes.map(note => note.id + note.name));
}

module.exports = updateNotesData
