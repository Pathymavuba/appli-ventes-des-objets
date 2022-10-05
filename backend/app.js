const express = require('express');

const app = express();
const  Objet = require('./models/objet')
const mongoose = require('mongoose');
const objet = require('./models/objet');
const { request } = require('express');
const stuffroutes = require('./routes/stuff')

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

app.use('/api/stuff',stuffroutes)
  
 

module.exports = app;