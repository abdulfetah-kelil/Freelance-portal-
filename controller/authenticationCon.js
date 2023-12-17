const authFirst = (req, res) => {
    res.status(200).json({message: 'here is authentication'});
}

const authCreate = (req, res) => {
    res.status(200).json({message: 'authentication created'});
}

const authUpdate = (req, res) => {
    res.status(200).json({message: 'authentication updated'});
}

const authDelete = (req, res) => {
    res.status(200).json({message: 'authentication deleted'});
}

module.exports ={ authFirst, authCreate, authUpdate, authDelete };