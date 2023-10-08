var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Ruta 1 encontrada');
});

module.exports = router;
