const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express',utilisator: utilisator });
});

class Utilisator{
  constructor(nom,prenom,codePostal){
    this.nom = nom;
    this.prenom = prenom;
    this.codePostal = codePostal;
  }
}
const utilisator = new Utilisator("Dupont","Pierre","1140");
module.exports = router;
