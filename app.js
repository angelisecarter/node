const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send("<h1>Welcome to the home page</h1>")
});

const port = process.env.port || 3000;
app.listen(port, function() {
    console.log("Server is runnng on port 3000.");
});