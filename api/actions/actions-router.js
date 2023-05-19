// "eylem" routerını buraya yazın
const express = require("express");

const router = express.Router();
const model = require("./actions-model");
const mv =require("./actions-middlware")
router.get("/",async (req,res,next)=>{
    const alluser = await model.get(req.params.id);
    res.json(alluser);

})
router.get("/:id",mv.validateUserId,async (req,res,next)=>{
    try {
        res.json(req.currentUser);
    } catch (error) {
        next(error)
    }
   

})

router.post("/",mv.validateUsername,async (req,res,next)=>{
    try {
        const insertedUser = await model.insert({ project_id: req.body.project_id,description:req.body.description,notes:req.body.notes });
        res.status(201).json(insertedUser);
    } catch (error) {
        next(error)
    }
   

})
router.put("/:id",mv.validateUserId,mv.validateUsername,async (req,res,next)=>{
    try {
        const insertedUser = await model.update(req.params.id,{ project_id: req.body.project_id,description:req.body.description,notes:req.body.notes });
        res.status(201).json(insertedUser);
    } catch (error) {
        next(error)
    }
   

})
router.delete("/:id",mv.validateUserId,async (req,res,next)=>{
    try {
         await model.remove(req.params.id);
        res.status(201).json(req.currentUser);
    } catch (error) {
        next(error)
    }
   

})
module.exports=router;