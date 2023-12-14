const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/authentication', (req, res) => {
    res.status(200).json({message: 'authentication'});
})

routes.post('/api/authentication', (req, res) => {
    res.status(200).json({message: 'authentication created'});
})

routes.put('/api/authentication', (req, res) => {
    res.status(200).json({message: 'authentication updated'});
})

routes.delete('/api/authentication', (req, res) => {
    res.status(200).json({message: 'authentication deleted'});
})
module.exports =routes;