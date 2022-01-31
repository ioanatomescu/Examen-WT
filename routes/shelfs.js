//GET operation for the first entity 
//POST operation for the first entity
//PUT operation for the first entity 
const VirtualShelf=require('../models/VirtualShelf');
const router=require("express").Router();
router.route("/shelfs")
.get(async(req,res)=>{
    try{
        const shelfs=await VirtualShelf.findAll();
        return res.status(200).json(shelfs);

    }catch(err){
        return res.status(500).json(err);
    }
}).post(async(req,res)=>{
    try{
        const newShelf=await VirtualShelf.create(req,body);
        return res.status(200).json(shelfs);


    }catch(err){
        return res.status(500).json(err);
    
    }
}).put((req,res)=>{
    let shelfModified=VirtualShelf.find(x=>x.id==req.params.id);
    shelfModified.description=req.body.description;
    return res.json(shelfModified);
}).delete((req,res)=>{
    filteredTable=shelfs.filter(x=>x.id!=req.params.id);
    res.send("Shelf with the id" + req.params.id+ "has been deleted");
})

module.exports =router;