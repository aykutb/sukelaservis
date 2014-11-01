var express = require('express');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');
var app = express();

var db = mongoskin.db('',{w: 0});

app.get('/get10sukela:page',function(req,res){

  var t = req.params.page;
  var sk = t * 10;

  db.collection('sukela')
    .find()
    .limit(10)
    .skip(sk)
    .toArray(function(err,data){
      res.send(data);
    });
});

app.get('/get50sukela:page', function(req,res){

  var t = req.params.page;
  var sk = t * 10;

  db.collection('sukela')
    .find()
    .limit(10)
    .skip(sk)
    .toArray(function(err,data){
      res.send(data);
    });
});
