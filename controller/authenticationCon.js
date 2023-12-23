const asyncHandler = require('express-async-handler');

const authFirst = (async (req, res) => {
    res.status(200).json({message: 'here is authentication'});
});

const authCreate = (async (req, res) => {
    res.status(200).json({message: 'authentication created'});
});

const authUpdate = (async (req, res) => {
    res.status(200).json({message: 'authentication updated'});
});

const authDelete = (async (req, res) => {
    res.status(200).json({message: 'authentication deleted'});
});

module.exports ={ authFirst, authCreate, authUpdate, authDelete };