"use strict";
const express=require("express")
const sequelize= require('./sequelize');
const VirtualShelf=require('./models/VirtualShelf')
const Book=require('./models/Book');


const app=express();
app.use("/api", require("./routes/books"));
app.use("/api",require("./routes/shelfs"));

app.use(express.urlencoded({
  extended:true,
}));
//Defining the relation between the two entities 
VirtualShelf.hasMany(Book);
app.listen(process.env.PORT||7005,async()=>{
    console.log("Server is running on port 7005")
    try{
      await sequelize.authenticate();
      console.log("Connection has been established")

    }catch(err){
        console.error("Unable to connect "+ err);
    }
})
//POST operation for the second entity as a child resource
app.post("/shelfs/:shelfId/newBooks",async(req,res,next)=>{
  try{
     const shelf=await VirtualShelf.findByPk(req.params.shelfId);
     if(shelf){
       const newBook=new Book(req.body);
       book.shelfId()=shelf.id();
       await book.save();
       res.status(201).json({message:"Book has been created"});
     }else{
       res.status(404).json({message:"404 -Shelf not found"});
     }
  }catch(error){
      next(error);
  }
})
//GET operation for the second entity as a child resource
app.get("/shelfs/:shelfId/newBooks", async(req,res,next)=>{
  try{
    const shelf=await VirtualShelf.findByPk(req.params.shelfId,{
      include:[Student]
    });
    if(shelf){
      res.status(200).json(shelf.Book);
    }else{
      res.status(404).json({message:"University not found"});
    }
  }
  catch(err){
     next(err);
  }
})
app.put("/shelfs/:shelfId/newBooks",async(req,res,next)=>{
  try{
    let bookModifies=Book.find(x=>x.id==req.params.id);
    bookModifies.description=req.body.description;
    return res.json(bookModifies);
  }catch(err){
      next(err);
  }

app.delete("/shelfs/:shelfId/newBooks", async(req,res,next)=>{
  try{
    filteredTable=books.filter(x=>x.id!=req.params.id);
    res.send("Shelf with the id" + req.params.id+ "has been deleted");
  }
  catch(err){
    next(err)
  }
})

})