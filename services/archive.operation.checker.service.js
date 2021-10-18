const archiveOperationCheckerService = (archive) => {
    if (typeof archive !== 'boolean')
        return {
            status: 422,
            message: "Error. Inputted data invalid!"
        };
    return false;
}

module.exports = archiveOperationCheckerService

