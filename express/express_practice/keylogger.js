const express = require("express");
const fs = require("fs");
const EventEmitter = require("events");

const app = express();
const PORT = 3000;

// Create event emitter
const keyEmitter = new EventEmitter();

app.use(express.json());

// Event listener
keyEmitter.on("keyPressed", (key) => {
    
    const data = `Key: ${key}\n`;

    fs.appendFile("keys.txt", data, (err) => {
        if (err) console.log("Error writing file");
    });

});

// Serve HTML page
app.get("/", (req, res) => {

res.send(`
<html>

<head>
<title>Key Logger Demo</title>
</head>

<body>

<h2>Realtime Key Logger Demo</h2>
<input type="text" id="box" placeholder="Type here">

<script>

const input = document.getElementById("box");

input.addEventListener("keyup", function(e){

fetch("/log", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
key: e.key
})
});

});

</script>

</body>
</html>
`);

});

// Receive key press
app.post("/log", (req, res) => {

const key = req.body.key;

// Emit event
keyEmitter.emit("keyPressed", key);

res.sendStatus(200);

});

app.listen(PORT, () => {
console.log("Server running on http://localhost:3000");
});