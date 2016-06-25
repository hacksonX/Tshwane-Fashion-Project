var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("Hello express");
});

app.listen(3000,function(){
	console.log("Port running on port 3000");
})