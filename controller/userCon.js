const asyncHandler = require('express-async-handler');

const userFirst = (async (req, res) => {
    res.status(200).json({message: 'here is user'});
});

const userCreate = (async (req, res) => {
    res.status(200).json({message: 'user created'});
});

const userUpdate = (async (req, res) => {
    res.status(200).json({message: 'user updated'});
});

const userDelete = (async (req, res) => {
    res.status(200).json({message: 'user deleted'});
});

module.exports = { userFirst, userCreate, userUpdate, userDelete };