const express = require('express');

const router = express.Router()
const userControlers = require('../controlers/user')

router.post('/signUp',userControlers.signUp)
router.post('/logIn',userControlers.logIn)

module.exports = router