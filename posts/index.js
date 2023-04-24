const express = require('express');
require('dotenv').config();
const cors=require('cors');
const bodyParser = require("body-parser");

const connectDB = require('./api/database/connection');


const app=express();
app.use(cors({origin : true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//For Routes
const routes = require('./routes');
routes.routingsetup(app);

//Database 
connectDB();


app.get('/',(req,res)=>{
    res.send("hello world");
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})