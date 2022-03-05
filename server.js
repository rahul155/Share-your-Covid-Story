import express from 'express';
import Connection from './database/db.js';
import Router from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from 'dotenv';

const app=express();
DotEnv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

if(process.env.NODE_ENV ==='production'){
     app.use(express.static('client/build'));
}

const PORT=process.env.PORT|| 8000;


const URL='mongodb://AEIntellect:cybHack155@covshare-shard-00-00.0v4xp.mongodb.net:27017,covshare-shard-00-01.0v4xp.mongodb.net:27017,covshare-shard-00-02.0v4xp.mongodb.net:27017/COVSHARE?ssl=true&replicaSet=atlas-tqwfn0-shard-0&authSource=admin&retryWrites=true&w=majority';

Connection(process.env.MONGODB_URI || URL);

app.listen(PORT,() => console.log("Server is running ")
);

