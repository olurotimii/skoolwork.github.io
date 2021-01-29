var express = require("express");
var api = express.Router();

api.use(function(req, res) {
    res.send("Hello from the api router!"); 
});

module.exports = api;