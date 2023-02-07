require('dotenv').config()

let express = require('express');
let app = express();

app.get("/", function(req, res) {
//   res.send('Hello Express');
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req, res) {
    const style = process.env.MESSAGE_STYLE;
    if (style == "uppercase") {
        res.json({"message": "HELLO JSON"})
    } else {
    res.json({"message": "Hello json"})
    }
})


































 module.exports = app;
