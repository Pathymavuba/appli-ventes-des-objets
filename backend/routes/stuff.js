const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
const stuffControlers = require('../controlers/stuff');


router.post('/',auth, stuffControlers.creationObjets);
router.get('/:id',auth,stuffControlers.rechercheElementUnique);
router.get('/',auth, stuffControlers.rechercheElements)
router.put('/:id',auth,stuffControlers.modifierElement)
router.delete('/:id',auth,stuffControlers.supprimerElement)




module.exports = router;