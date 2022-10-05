const express = require('express');
const router = express.Router();
const stuffControlers = require('../controlers/stuff');


router.post('/', stuffControlers.creationObjets);
router.get('/:id',stuffControlers.rechercheElementUnique);
router.get('/', stuffControlers.rechercheElements)
router.put('/:id',stuffControlers.modifierElement)
router.delete('/:id',stuffControlers.supprimerElement)




module.exports = router;