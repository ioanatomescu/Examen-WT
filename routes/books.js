const Book=require('../models/Book');
const router=require("express").Router();
router.route("/books")
.get(async(req,res)=>{
    try{
        const books=await Book.findAll();
        return res.status(200).json(books);

    }catch(err){
        return res.status(500).json(err);
    }
}).post(async(req,res)=>{
    try{
        const newBook=await Book.create(req,body);
        return res.status(200).json(books);


    }catch(err){
        return res.status(500).json(err);
    
    }
})

module.exports =router;