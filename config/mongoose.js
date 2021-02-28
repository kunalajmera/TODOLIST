const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost/TODO");


const db=mongoose.connection.then(respond=>{
    console.log("running rapidly")}).catch(err=>{
        console.log("error occured")
    });

// db.on("error",console.error.bind(console,"error connecting to db"));

// //up and running then print
// db.once("open",function(){
//     console.log("successful connected to the database");
// });