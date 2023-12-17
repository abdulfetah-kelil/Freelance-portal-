const express=require('express');
const { conFirst, conCreate, conUpdate, conDelete } = require('../controller/conversationCon');
// creating express application
const app= express();
const routes= express.Router();

routes.get('/api/conversation', conFirst);

routes.post('/api/conversation', conCreate);

routes.put('/api/conversation', conUpdate);

routes.delete('/api/conversation', conDelete);

module.exports = routes;