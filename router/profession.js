const express=require('express');
const { profFirst, profCreate, profUpdate, profDelete } = require('../controller/professionCon');
// creating express application
const app = express();
const routes = express.Router();
routes.get('/api/profession', profFirst);

routes.post('/api/profession', profCreate);

routes.put('/api/profession', profUpdate);

routes.delete('/api/profession', profDelete);

module.exports =routes;