var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('sandboxlogin');
   //res.render('sandbox', { padnumber: 'public',padname:'Public file',username: "anik" });
});

router.get('/public', function(req, res, next) {
res.render('sandbox', { padnumber: 'public',padname:'Public file',username: decodeURI(req.query.namee),useremail: decodeURI(req.query.email) });
});


module.exports = router;
