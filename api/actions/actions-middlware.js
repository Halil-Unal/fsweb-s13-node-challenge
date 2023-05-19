// eylemlerle ilgili ara katman yazılımları yazın



const  UserModel = require("./actions-model")

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
        const {project_id,description,notes}=req.body
        if(!project_id || !description || !notes){
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