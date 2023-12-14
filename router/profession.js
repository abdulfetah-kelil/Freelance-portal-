const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/profession', (req, res) => {
    res.status(200).json({message: 'profession'});
})

routes.post('/api/profession', (req, res) => {
    res.status(200).json({message: 'profession created'});
})

routes.put('/api/profession', (req, res) => {
    res.status(200).json({message: 'profession updated'});
})

routes.delete('/api/profession', (req, res) => {
    res.status(200).json({message: 'profession deleted'});
})
module.exports =routes;