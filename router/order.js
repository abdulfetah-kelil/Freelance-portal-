const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/order', (req, res) => {
    res.status(200).json({message: 'order'});
})

routes.post('/api/order', (req, res) => {
    res.status(200).json({message: 'order created'});
})

routes.put('/api/order', (req, res) => {
    res.status(200).json({message: 'order updated'});
})

routes.delete('/api/order', (req, res) => {
    res.status(200).json({message: 'order deleted'});
})
module.exports =routes;