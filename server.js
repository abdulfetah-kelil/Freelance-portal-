const express=require('express');

const authenticationRoutes=require('./router/authentication');
const conversationRoutes=require('./router/conversation');
const messageRoutes=require('./router/message');
const orderRoutes=require('./router/order');
const professionRoutes=require('./router/profession');
const reviewRoutes=require('./router/review');
const userRoutes=require('./router/user');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

// creating express application
const app= express();
app.use(express.json());

app.use(authenticationRoutes);
app.use(conversationRoutes);
app.use(messageRoutes);
app.use(orderRoutes);
app.use(professionRoutes);
app.use(reviewRoutes);
app.use(userRoutes);
app.use(errorHandler);
// port number 
const port = process.env.PORT_NUMBER||3000;

// i have created the express application then the express app should be listening on port
app.listen(port,()=>{
    console.log(`Server listing or running on port ${port}`);
});
