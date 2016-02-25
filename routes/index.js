var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/editor', function(req, res, next) {
  res.render('sandbox', { padnumber: 'test' });
});

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('hello');
});


router.get('/home', function(req, res, next) {
  res.render('homePage');
});


router.get('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert({"email":"akm@asd.com"}, function(err, result){
        res.send(
            (err === null) ? { status : 'worked'} : { msg: err }
        );
    });
});

router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');


	console.log("stuff : " + req.body.email);


    collection.find({email: req.body.email},function (err,argument) {
    		// body...

    		var iffy = JSON.stringify(argument);
    		console.log(iffy.length);
		if (iffy.length == 2)
		{
		 	    collection.insert({"email":req.body.email}, function(err, result){
			        res.send(
            			(err === null) ? { status : 'worked'} : { msg: err }
        			);
    			});
		};
	});



});




module.exports = router;
