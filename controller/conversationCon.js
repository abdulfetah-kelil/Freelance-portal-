const conFirst = (req, res) => {
    res.status(200).json({message: 'here is conversation'});
}

const conCreate = (req, res) => {
    res.status(200).json({message: 'conversation created'});
}

const conUpdate = (req, res) => {
    res.status(200).json({message: 'conversation updated'});
}

const conDelete = (req, res) => {
    res.status(200).json({message: 'conversation deleted'});
}

module.exports = { conFirst, conCreate, conUpdate, conDelete };