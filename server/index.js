const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require('cors')




exports.ACCESS_TOKEN_SECRET='swsh23hjddnns'





//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())
app.use('/api/', require('./routes/api'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});