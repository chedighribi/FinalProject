const User = require ('../Models/userModel');

const isAdmin = async (req,res,next)=>{
    try {
        const token = req.headers['auth-token'];
        const decoded = await jwt.verify(token, config.get("SECRETKEY"));
        const user= await User.findById(decoded.id)
    } catch (error) {
        
    }
}