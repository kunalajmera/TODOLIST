const express=require("express");
const app=express();

const port=8000;


const db=require("./config/mongoose");
const Todo=require("./models/todo")
//use express router


app.set("view engine","ejs");
app.set("views","./views");
app.use(express.urlencoded());//middleware this is the part which decode the input sent from from browser after form submission and add body object to request
app.use(express.static('assets'));//middleware

app.get('/',(req,res)=>{
    Todo.find({},function(err,contacts){
        if(err)
        {
            console.log("Error in fetching contact from DB");
            return;
        }
        return res.render('home',
    {title:"TODO APP",
    Todolist:contacts
});
    });
    
});


app.get('/delete-contact/',function(req,res){
    //get the id from query in the ul
    let id=req.query.id;
    //find the contact in the database using id and delete
    Todo.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("error in deleting an object from database");
            return;
        }
        return res.redirect('/');
    });
    
});


app.post('/create-Todo',function(req,res)
{
    // console.log(req);
    // contactList.push({name:req.body.name,
    // phone:req.body.phone});
    Todo.create({
        descrip:req.body.descrip,
        cate:req.body.Category,
        date:req.body.date
    },function(err,newContact){
        if(err)
        {
            console.log("error in creating a contact");
            return;
        }
        return res.redirect("back");
    });


    //return res.redirect('/');
});

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error: ${err}`);
    }
    else{
    console.log(`Connected to Port:${port}`);
    }
});