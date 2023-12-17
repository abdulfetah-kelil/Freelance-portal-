const express=require('express');
const { reviewFirst, reviewCreate, reviewUpdate, reviewDelete } = require('../controller/reviewCon');
// creating express application
const app= express();
const routes= express.Router();
routes.get('/api/review', reviewFirst);

routes.post('/api/review', reviewCreate);

routes.put('/api/review', reviewUpdate);

routes.delete('/api/review', reviewDelete);

module.exports =routes;