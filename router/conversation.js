const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/conversation', (req, res) => {
    res.status(200).json({message: 'conversation'});
})

routes.post('/api/conversation', (req, res) => {
    res.status(200).json({message: 'conversation created'});
})

routes.put('/api/conversation', (req, res) => {
    res.status(200).json({message: 'conversation updated'});
})

routes.delete('/api/conversation', (req, res) => {
    res.status(200).json({message: 'profession deleted'});
})
module.exports =routes;