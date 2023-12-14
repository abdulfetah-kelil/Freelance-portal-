const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/message', (req, res) => {
    res.status(200).json({message: 'message'});
})

routes.post('/api/message', (req, res) => {
    res.status(200).json({message: 'message created'});
})

routes.put('/api/message', (req, res) => {
    res.status(200).json({message: 'message updated'});
})

routes.delete('/api/message', (req, res) => {
    res.status(200).json({message: 'authentication deleted'});
})
module.exports =routes;