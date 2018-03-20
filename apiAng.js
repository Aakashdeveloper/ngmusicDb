/***************Fecth data using mongodb where its is realted to model***********/
var express = require('express');
var mongodb = require('mongodb').MongoClient;

var app = express();

var port = process.env.PORT||6700; 
var commanRouter = express.Router();

commanRouter.route('/getMusic')
    .get(function(req,res){
    	var url ="mongodb://XXXXXXXXXXXXXXXXXXXXXXXX";
    	mongodb.connect(url, (err, db) => {
			  if (err) {
			    return console.log(err);
			  }
			  db.collection('musicdb').find({}).toArray(
            	function(err,data){
					if(err)
					   
					   res.status(500).send(err);
					else
						res.setHeader('Access-Control-Allow-Origin','*')
		    		    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
						res.json(data);
		})
		})
		
});

app.use('/api', commanRouter);

app.get('/',function(req,res){
	res.send("Working")
});
app.listen(port, function(){
	console.log("running");
});
