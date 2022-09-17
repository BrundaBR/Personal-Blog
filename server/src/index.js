//import
const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const cors=require('cors');
//start
const app=express();
app.use(morgan('common'));
app.use(helmet());
//only request from this url can access our backend
app.use(cors({
    origin:'http://localhost:3000',
}));
app.get('/',(req,res)=>{
    res.json({
        message:"Hello World",
    });
});

app.use((req,res,next)=>{
    const error=new Error(`Not Found-${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    const statusCode=res.statusCode==200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message:error.message,
        stack:error.stack,

    }) ;
});



const port = process.env.PORT || 1337;
//port setup
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
});