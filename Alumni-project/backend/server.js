
const express= require('express');
const app=express();
const mongoose=require("mongoose");
const routes=require("./routes/route");
const session= require('express-session');
const MongoStore = require('connect-mongo');
require("dotenv").config();

app.use(express.json());



mongoose.connect(process.env.MONGOOSE_URL);

app.use(session({
    secret: 'Prabhas',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000, // Session expires after 10 minutes
        secure: false,
        httpOnly: true
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/sessionStorage',
        ttl: 10 * 60 // TTL (Time To Live) in seconds, equals to session maxAge
    })
}));


app.use("/alumnitracking",routes);
app.listen(process.env.PORT,()=> {
    console.log(`Server established at ${process.env.PORT}`)});
