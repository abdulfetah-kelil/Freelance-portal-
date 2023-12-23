const asyncHandler = require('express-async-handler');

const profFirst = (async (req, res) => {
    res.status(200).json({message: 'here is profession'});
});

const profCreate = (async (req, res) => {
    res.status(200).json({message: 'profession created'});
});

const profUpdate = (async (req, res) => {
    res.status(200).json({message: 'profession updated'});
});

const profDelete = (async (req, res) => {
    res.status(200).json({message: 'profession deleted'});
});

module.exports = { profFirst, profCreate, profUpdate, profDelete };