const userFirst = (req, res) => {
    res.status(200).json({message: 'here is user'});
}

const userCreate = (req, res) => {
    res.status(200).json({message: 'user created'});
}

const userUpdate = (req, res) => {
    res.status(200).json({message: 'user updated'});
}

const userDelete = (req, res) => {
    res.status(200).json({message: 'user deleted'});
}

module.exports = { userFirst, userCreate, userUpdate, userDelete };