const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send("<h1>Welcome to the home page</h1>")
});

app.listen(3000, function() {
    console.log("Server is runnng on port 3000.");
});