const express = require('express');

const router = express.Router();
const objet = require('../models/objet');

router.post('/', (req, res) => {
    delete req.body._id;
    const objet = new Objet({...req.body});
      objet.save()
     .then(resultat=>console.log("Obejet ajouté avec succès"))
     .catch(err=>res.status(404).json({err}))
  });
  router.get('/:id', (req, res, next) => {
    objet.findOne({ _id: req.params.id })
      .then(objet => res.status(200).json(objet))
      .catch(error => res.status(404).json({ error }));
  });
 
router.get('/', (req, res, next) => {
   objet.find()
    .then((objets)=>{res.status(200).json(objets)})
    .catch(err=>res.status(404).json({err}))
  
  })
router.put('/:id',(req,res,next)=>{
  objet.updateOne({_id:req.params.id},{ ...req.body, _id: req.params.id })
   .then(()=>res.status(200).json({ message: 'Objet modifié !'}))
   .catch(error => res.status(404).json({ error }));
  

})
router.delete('/:id',(req,res,next)=>{
  objet.deleteOne({id:req.params.id})
  .then(()=>res.status(200).json({ message: 'Objet supprimé avec succès!'}))
   .catch(error => res.status(404).json({ error }));
   
})




module.exports = router;