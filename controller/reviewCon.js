const asyncHandler = require('express-async-handler');

const reviewFirst = (async (req, res) => {
    res.status(200).json({message: 'here is review'});
});

const reviewCreate = (async (req, res) => {
    res.status(200).json({message: 'review created'});
});

const reviewUpdate = (async (req, res) => {
    res.status(200).json({message: 'review updated'});
});

const reviewDelete = (async (req, res) => {
    res.status(200).json({message: 'review deleted'});
});

module.exports = { reviewFirst, reviewCreate, reviewUpdate, reviewDelete };