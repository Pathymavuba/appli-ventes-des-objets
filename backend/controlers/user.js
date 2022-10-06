const User = require('../models/user')
const bcrypt = require('bcrypt')

exports.signUp = ((req, res, next)=>{
    bcrypt.hash(req.body.password,10)
     .then((hash)=>{
        const user = new User({
            email : req.body.email,
            password :hash
        })
        user.save()
        .then(()=>{
            console.log('user créé');
            res.status(201).json({mesage:"user créé"})})
        .catch((error)=>res.status(400).json({mesage:error}))
     })
      

     .catch(error=>res.status(500).json({error}))

})

exports.logIn= ((req, res, next)=>{
    User.findOne({email:req.body.email})
     .then(user=>{
        if (user === null){
            return res.status(404).json({message:'pair login/mot de passe incorrect'})
        }else{
            bcrypt.compare(req.body.password,user.password)
              .then(valid=>{
                if(!valid){
                    return res.status(404).json({message:'pair login/mot de passe incorrect'})
                }
                console.log("mot de passe correct");
                res.status(200).json({
                    userId:user._id,
                    token:'TOKEN',
                })
              })
              .catch(err=>res.status(500).json({err}))
        } })
     .catch(error=>res.status(500).json({error}))
})


