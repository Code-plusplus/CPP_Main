var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('sandbox', { padnumber: 'test',padname:'Test file',username: "anik" });
});



module.exports = router;
