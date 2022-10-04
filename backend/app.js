const express = require('express');

const app = express();
const  Objet = require('./models/objet')
const mongoose = require('mongoose');
const objet = require('./models/objet');
const { request } = require('express');

const db_url = 'mongodb+srv://pathy:LaethiciaKandolo@cluster0.pfgm2xt.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db_url)
 .then(resultat=>console.log('La connexion avec la db a reussie!'))
 .catch((err)=>console.log(err))

app.use(express.json());

app.use((req, res, next) => {
    //l'entête permettant à deux origines de s'entendre 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/stuff', (req, res) => {
    delete req.body._id;
    const objet = new Objet({...req.body});
      objet.save()
     .then(resultat=>console.log("Obejet ajouté avec succès"))
     .catch(err=>res.status(404).json({err}))
  });
  app.get('/api/stuff/:id', (req, res, next) => {
    objet.findOne({ _id: req.params.id })
      .then(objet => res.status(200).json(objet))
      .catch(error => res.status(404).json({ error }));
  });
 
app.get('/api/stuff', (req, res, next) => {
   objet.find()
    .then((objets)=>{res.status(200).json(objets)})
    .catch(err=>res.status(404).json({err}))
  
  })
app.put('/api/stuff/:id',(req,res,next)=>{
  objet.updateOne({_id:req.params.id},{ ...req.body, _id: req.params.id })
   .then(()=>res.status(200).json({ message: 'Objet modifié !'}))
   .catch(error => res.status(404).json({ error }));
  

})
app.delete('/api/stuff/:id',(req,res,next)=>{
  objet.deleteOne({id:req.params.id})
  .then(()=>res.status(200).json({ message: 'Objet supprimé avec succès!'}))
   .catch(error => res.status(404).json({ error }));
   
})
  
 

module.exports = app;