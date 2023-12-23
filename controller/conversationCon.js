const asyncHandler = require('express-async-handler');

const conFirst = ( async (req, res) => {
    res.status(200).json({message: 'here is conversation'});
});

const conCreate = ( async (req, res) => {
    res.status(200).json({message: 'conversation created'});
});

const conUpdate = ( async (req, res) => {
    res.status(200).json({message: 'conversation updated'});
});

const conDelete = ( async (req, res) => {
    res.status(200).json({message: 'conversation deleted'});
});

module.exports = { conFirst, conCreate, conUpdate, conDelete };