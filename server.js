const express=require('express');
const routes=require('./router/orderRouter.js');

// creating express application
const app= express();

app.use(routes);
// port number 
const port=4004;

// i have created the express application then the express app should be listening on port
app.listen(port,()=>{
    console.log(`Server listing or running on port ${port}`);
});
