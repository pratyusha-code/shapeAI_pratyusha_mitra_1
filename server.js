const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extented: true}));

/*app.get("/", function(req, res){
	res.send("<h1>hello world</h1>");
});


/*app.get("/about", function(req, res){
	res.send("<h1>hello world</h1><p>This is pretty hard to underdstand</p>");
});


app.get("/shapeai", function(req, res){
	res.send("<h1>SHAPE AI</h1><p>This is pretty hard to understand</p>");
});*/


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");

});


app.post("/index.html", function(req, res){
	var n1= Number(req.body.num1);
	var n2= Number(req.body.num2);
	var result= n1/(n2*n2);
	res.send("The answer is:" + result);
});

app.listen(3000, function(){
	console.log("Server has started in the port 3000")
});













