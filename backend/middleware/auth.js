const jwt = require('jsonwebtoken');

// middleware pour verifier le token du user
module.exports = ((req,res,next) => {

    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SECRET')
        const userId =decodedToken.user.id;
    
         req.auth={
            userId: userId,
         }
         next()

    }
    catch(err){
        res.status(401).json({err})
    }
   

})