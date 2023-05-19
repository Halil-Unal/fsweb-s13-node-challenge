// projects ara yazılımları buraya


const  UserModel = require("./projects-model")



async function validateUserId(req, res, next) {
    // SİHRİNİZİ GÖRELİM
    try {
      let user = await UserModel.get(req.params.id);
      if (!user) {
        res.status(404).json({ mesaj: "user not found" });
      } else {
        req.currentUser = user;
        next();
      }
    } catch (error) {
      next(error);
    }
  }
function validateUsername(req,res,next){
    try {
        const {name,description,}=req.body
        if(!name || !description ){
            res.status(400).json({message:"bilgiler eksik"})
        }
        else{
           next(); 
        }
    } catch (error) {
        next(error)
    }
}

  module.exports={validateUserId,validateUsername}