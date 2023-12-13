const express=require('express');

// creating express application 
const app= express();
app.get('/api/order', (req, res) => {
    res.status(200).json({message: 'order'});
})

app.get('/api/profession', (req, res) => {
    res.status(200).json({message: 'profession'});
})

// port number 
const port=4000;

// i have created the express application then the express app should be listening on port
app.listen(port,()=>{
    console.log(`Server listing or running on port ${port}`);
});
