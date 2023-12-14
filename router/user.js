const express=require('express');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/user', (req, res) => {
    res.status(200).json({message: 'user'});
})

routes.post('/api/user', (req, res) => {
    res.status(200).json({message: 'user created'});
})

routes.put('/api/user', (req, res) => {
    res.status(200).json({message: 'user updated'});
})

routes.delete('/api/user', (req, res) => {
    res.status(200).json({message: 'user deleted'});
})
module.exports =routes;