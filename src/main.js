
let express = require("express");
// node already has a process object already and env object already.
// all this line does it reads the .env file and addsd that info to the env varible that node
// cares around anyways.
require("dotenv").config()
let static = express.static("public");
let app = express();

app.use(express.static('public'));
app.use(express.json());

let routes = require("./routes.js");
app.use(routes);

// we're allways going to fall back to the .env file 
// if we have a port defined it'll pick that up first 
// if undefined or falsey it'll taket he 8000 instead.
// reasons is when we deploy on the cloud or whereever we put it we're not going to choose the port
// the service will
let port = process.env.APP_PORT || 8000;

app.listen(port, function(){
    console.log("application listening on port", port);
})  