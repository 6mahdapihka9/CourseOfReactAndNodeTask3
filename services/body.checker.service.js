const bodyCheckerService = (body) => {
    if (!body)
        return {
            status:400,
            message:"Error. Note's data not found!"
        };
    return false;
}

module.exports = bodyCheckerService

