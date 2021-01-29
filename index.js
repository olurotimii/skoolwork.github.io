var express =  new require("express");
var app = express();

//Routes
app.get("/olivia", function(req, res) {
    res.send("Welcome to Olvia's homepage!");
});

app.use(function(req, res) {
    res.status(404).send("Page not found!");
});

app.listen(3000);