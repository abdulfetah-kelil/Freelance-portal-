const reviewFirst = (req, res) => {
    res.status(200).json({message: 'here is review'});
}

const reviewCreate = (req, res) => {
    res.status(200).json({message: 'review created'});
}

const reviewUpdate = (req, res) => {
    res.status(200).json({message: 'review updated'});
}

const reviewDelete = (req, res) => {
    res.status(200).json({message: 'review deleted'});
}

module.exports = { reviewFirst, reviewCreate, reviewUpdate, reviewDelete };