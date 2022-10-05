const Objet = require('../models/objet');
 
exports.creationObjets = ((req, res) => {
    delete req.body._id;
    const objet = new Objet({...req.body});
      objet.save()
     .then(resultat=>console.log("Obejet ajouté avec succès"))
     .catch(err=>res.status(404).json({err}))
  });
exports.rechercheElementUnique = ((req, res, next) => {
    Objet.findOne({ _id: req.params.id })
      .then(objet => res.status(200).json(objet))
      .catch(error => res.status(404).json({ error }));
  })

 exports.rechercheElements = ((req, res, next) => {
    Objet.find()
     .then((objets)=>{res.status(200).json(objets)})
     .catch(err=>res.status(404).json({err}))
   
   });

exports.modifierElement =((req,res,next)=>{
    Objet.updateOne({_id:req.params.id},{ ...req.body, _id: req.params.id })
     .then(()=>res.status(200).json({ message: 'Objet modifié !'}))
     .catch(error => res.status(404).json({ error }));
  
  })

exports.supprimerElement = ((req,res,next)=>{
    Objet.deleteOne({id:req.params.id})
    .then(()=>res.status(200).json({ message: 'Objet supprimé avec succès!'}))
     .catch(error => res.status(404).json({ error }));
     
  })