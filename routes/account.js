const express = require('express');
const router = new express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('account',{title :'Connexion'});
});

module.exports = router;
