const express=require('express');
const { userFirst, userCreate, userUpdate, userDelete } = require('../controller/userCon');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/user', userFirst);

routes.post('/api/user', userCreate);

routes.put('/api/user', userUpdate);

routes.delete('/api/user', userDelete);

module.exports =routes;