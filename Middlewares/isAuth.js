const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../Models/userModel");


const isAuth = async (req,res,next)=>{
    try {
        const token = req.headers['auth-token'];
        console.log(token)    
        if (!token)
            return res.status(401).send({msg:'No token'});
            console.log('1')
        const decoded = await jwt.verify(token, config.get("SECRETKEY"));

        const Tuser= await User.findById(decoded.id)
        if (!Tuser){
            console.log('2')
            return res.status(402).send({msg:'denied'});
        }
        console.log('3')
        req.user=Tuser;
        next();
    } catch (error) {
        return res.status(400).json({msg:'Token not valid',error})
    }
    req.user = Tuser;
    next();
  } catch (error) {
    return res.status(400).json({ msg: "Token not valid", error });
  }
};

module.exports = isAuth;
