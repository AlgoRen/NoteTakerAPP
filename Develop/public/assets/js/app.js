// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../')));
app.use(express.static('public'));

console.log(path.join(__dirname, '../../'));
var newNotes = [];
// Routes
// =============================================================

// Basic route that sends the user to index.html
app.get("/", function (req, res) {
    res.sendFile("index");
});
// Basic routing that sends the user to notes.html
app.get("/notes", function(req, res) {
    res.sendFile("notes");
})

// Routing for handling POST request from client.
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var notes = req.body;
  
    // // Using a RegEx Pattern to remove spaces from newCharacter
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(notes);
  
    newNotes.push(notes);
  
    res.json(notes);
});

app.get("/api/notes", function (req, res) {
    return res.json(newNotes);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  