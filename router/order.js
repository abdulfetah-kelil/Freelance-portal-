const express=require('express');
const { orderFirst, orderCreate, orderUpdate, orderDelete } = require('../controller/orderCon');
// creating express application
const app= express();
const routes= express.Router();

routes.get('/api/order', orderFirst);

routes.post('/api/order', orderCreate);

routes.put('/api/order', orderUpdate);

routes.delete('/api/order', orderDelete);

module.exports =routes;