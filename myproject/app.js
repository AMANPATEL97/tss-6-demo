import express from 'express';
import cors from 'cors';
import Allroute from './routes/ALLroute.js';
import { port } from './config/conn.js';
import upload from 'express-fileupload';
import PATH from 'path';

let app=express()
app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({succes:true}))
app.use(express.static(PATH.resolve()+"/assets"));
app.use(Allroute)
app.listen(port,()=>{
    console.log("server running port",port)
})
