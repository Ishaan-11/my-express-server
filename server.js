const express = require('express');
const { response } = require('express');

const app = express();

app.get("/", function(req, res) {
    res .send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: 100");
});

app.get("/about", function(req, res) {
    res.send("I am a learner");
});

app.get("/hobbies", function(req,res) {
    res.send("<ul><li>Cricket</li><li>Badminton</li><li>GTA</li></ul");
});
app.listen(3000, function() {
    console.log('Server started on port 3000');
});