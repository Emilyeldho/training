var express=require('express');
var app=express();

app.get('*',function(req,res){
	res.send('Invalid URL');
});
app.listen(2000);