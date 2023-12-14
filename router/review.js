const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/review', (req, res) => {
    res.status(200).json({message: 'review'});
})

routes.post('/api/review', (req, res) => {
    res.status(200).json({message: 'review created'});
})

routes.put('/api/review', (req, res) => {
    res.status(200).json({message: 'review updated'});
})

routes.delete('/api/review', (req, res) => {
    res.status(200).json({message: 'review deleted'});
})
module.exports =routes;