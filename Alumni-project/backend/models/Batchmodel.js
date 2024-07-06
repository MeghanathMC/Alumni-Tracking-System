const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const batchSchema= new Schema({
    year:{
        type:String,
        required:true,
    }
});

const batch=mongoose.model("batch",batchSchema);

module.exports= batch;