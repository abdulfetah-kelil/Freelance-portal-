const profFirst = (req, res) => {
    res.status(200).json({message: 'here is profession'});
}

const profCreate = (req, res) => {
    res.status(200).json({message: 'profession created'});
}

const profUpdate = (req, res) => {
    res.status(200).json({message: 'profession updated'});
}

const profDelete = (req, res) => {
    res.status(200).json({message: 'profession deleted'});
}

module.exports = { profFirst, profCreate, profUpdate, profDelete };