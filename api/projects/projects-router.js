// "project" routerını buraya yazın!
const express = require("express");
const router = require("express").Router();

const model = require("./projects-model");
const mv = require("./projects-middleware");

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
        const insertedUser = await model.insert({ name:req.body.name,description:req.body.description });
        res.status(201).json(insertedUser);
    } catch (error) {
        next(error)
    }
   

})
router.put("/:id",mv.validateUserId,mv.validateUsername,async (req,res,next)=>{
    try {
        const insertedUser = await model.update(req.params.id,{ name:req.body.name,description:req.body.description});
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

router.get("/:id/actions", mv.validateUserId, async (req, res, next) => {
    // USER POSTLARINI İÇEREN BİR DİZİ DÖNDÜRÜN
    // user id yi doğrulayan bir ara yazılım gereklidir.
  
    try {
      const allUsersPosts = await model.getProjectActions(req.params.id);
      res.json(allUsersPosts);
    } catch (error) {
      next(error);
    }
  });


module.exports=router;