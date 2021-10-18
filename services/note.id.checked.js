const noteIdCheckerService = (notes, id) => {
    if (notes.find(note => note.id === id))
        return {
            status: 400,
            message: "Error. There is no such note!"
        };

    return false;
}

module.exports = noteIdCheckerService

