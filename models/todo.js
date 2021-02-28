const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
    descrip:{
        type:String,
        required:true
    },
    cate:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const Todo=mongoose.model("Todo",contactSchema);
module.exports=Todo;