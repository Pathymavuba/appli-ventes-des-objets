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

exports.logIn= ((req, res, next)=>{})


