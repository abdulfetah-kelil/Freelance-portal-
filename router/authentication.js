const express=require('express');
const { authFirst, authCreate, authUpdate, authDelete, } = require('../controller/authenticationCon');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/authentication', authFirst );

routes.post('/api/authentication', authCreate);

routes.put('/api/authentication', authUpdate);

routes.delete('/api/authentication', authDelete);

module.exports =routes;