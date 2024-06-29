

const express= require('express');
const app=express();
const mongoose=require("mongoose");
const routes=require("./routes/route");
require("dotenv").config();

app.use(express.json());
app.use("/alumnitracking",routes);

mongoose.connect(process.env.MONGOOSE_URL);

app.listen(process.env.PORT,()=> {
    console.log(`Server established at ${process.env.PORT}`)});
