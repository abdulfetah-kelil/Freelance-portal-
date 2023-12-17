const orderFirst = (req, res) => {
    res.status(200).json({message: 'here is order'});
}

const orderCreate = (req, res) => {
    res.status(200).json({message: 'order created'});
}

const orderUpdate = (req, res) => {
    res.status(200).json({message: 'order updated'});
}

const orderDelete = (req, res) => {
    res.status(200).json({message: 'order deleted'});
}

module.exports = { orderFirst, orderCreate, orderUpdate, orderDelete };