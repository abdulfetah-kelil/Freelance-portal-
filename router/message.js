const express=require('express');
const { messFirst, messCreate, messUpdate, messDeleted } = require('../controller/messageCon');
// creating express application
const app= express();
const routes= express.Router();

routes.get('/api/message', messFirst);

routes.post('/api/message', messCreate);

routes.put('/api/message', messUpdate);

routes.delete('/api/message', messDeleted);

module.exports = routes;