const express=require('express');
// creating express application by
const app= express();
const routes= express.Router();
routes.get('/api/order', (req, res) => {
    res.status(200).json({message: 'order'});
})

routes.get('/api/profession', (req, res) => {
    res.status(200).json({message: 'profession'});
})
module.exports =routes;