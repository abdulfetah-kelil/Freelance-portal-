const asyncHandler = require('express-async-handler');

const messFirst = (async(req, res) => {
    res.status(200).json({message: 'here is message'});
});

const messCreate = (async(req, res) => {
    res.status(200).json({message: 'message created'});
});

const messUpdate = (async(req, res) => {
    res.status(200).json({message: 'message updated'});
});

const messDeleted = (async(req, res) => {
    res.status(200).json({message: 'message deleted'});
});

module.exports = { messFirst, messCreate, messUpdate, messDeleted };