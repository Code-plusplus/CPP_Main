var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
    var collection = db.get('userlist2');
    collection.insert({"email":"akm@asd.com"}, function(err, result){
        res.send(
            (err === null) ? { status : 'worked'} : { msg: err }
        );
    });
});

router.get('/listuser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist2');
    collection.find({},function (err,argument) {
            var iffy = JSON.stringify(argument);
            console.log(iffy);
            res.send(iffy);
    });
});


router.post('/registeruser', function(req, res) {
    if(req.body.password==="qwertyuiopcodeauth0"){
    var db = req.db;
    var collection = db.get('userlistmain');
    collection.find({email: req.body.email},function (err,argument) {
            var iffy = JSON.stringify(argument);
        if (iffy.length == 2)   //empty result []
        {
                collection.insert({"email":req.body.email}, function(err, result){
                    res.send(
                        (err === null) ? { status : 'worked'} : { msg: err }
                    );
                });
        }
    });
    }
    else {
        res.send("Authentication Error");
    }
});

router.post('/checkadmin', function(req, res) {
    var db = req.db;
    var collection = db.get('adminlistmain');
    collection.find({email: req.body.email},function (err,argument) {
            var iffy = JSON.stringify(argument);
        if (iffy.length !== 2)   //empty result []
        {
            res.send(
                        (err === null) ? { status : 'found'} : { msg: err }
                    );
        }
        else {
                res.send(
                        (err === null) ? { status : 'not found'} : { msg: err }
                    );
        }
    });
});

router.post('/registeradmin', function(req, res) {
    if(req.body.password==='qwertyuiopcodeauth0'){
    var db = req.db;
    var collection = db.get('adminlistmain');
    collection.find({email: req.body.email},function (err,argument) {
            var iffy = JSON.stringify(argument);
        if (iffy.length == 2)   //empty result []
        {
                collection.insert({"email":req.body.email}, function(err, result){
                    res.send(
                        (err === null) ? { status : 'worked'} : { msg: err }
                    );
                });
        }
    });
    }
    else {
        res.send("Authentication Error "+req.body.password);
    }
});



router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist2');


	//console.log("stuff : " + req.body.email);


    collection.find({email: req.body.email},function (err,argument) {
    		// body...

    		var iffy = JSON.stringify(argument);
    		//console.log(iffy.length);
		if (iffy.length == 2)
		{
		 	    collection.insert({"email":req.body.email,'name':req.body.namee,'image':req.body.image}, function(err, result){
			        res.send(
            			(err === null) ? { status : 'worked'} : { msg: err }
        			);
    			});
		}
	});



});




module.exports = router;
