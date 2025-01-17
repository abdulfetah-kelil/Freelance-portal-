const asyncHandler = require('express-async-handler');

const orderFirst = (req, res) => {
    res.status(200).json({message: 'here is order'});
}

const orderCreate = (async (req, res) => {
    const {fullName, phoneNumber, email, profession, age} = req.body;
    if (!fullName || !phoneNumber || !email || !profession || !age) {
        throw new Error("All data must be provided!");
    }
    res.status(200).json({message: 'order created'});
    console.log("the created new order is :",req.body);
});

const orderUpdate = (async (req, res) => {
    res.status(200).json({message: 'order updated'});
});

const orderDelete = (async(req, res) => {
    res.status(200).json({message: 'order deleted'});
});

module.exports = { orderFirst, orderCreate, orderUpdate, orderDelete };