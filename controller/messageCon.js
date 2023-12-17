const messFirst = (req, res) => {
    res.status(200).json({message: 'here is message'});
}

const messCreate = (req, res) => {
    res.status(200).json({message: 'message created'});
}

const messUpdate = (req, res) => {
    res.status(200).json({message: 'message updated'});
}

const messDeleted = (req, res) => {
    res.status(200).json({message: 'message deleted'});
}

module.exports = { messFirst, messCreate, messUpdate, messDeleted };