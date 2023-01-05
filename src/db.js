let mysql = require("mysql");

let connection = mysql.createConnection({
    // we changed to the .env file. we can send them our code but not our .env information
    "host": process.env.DB_HOSTNAME,
    "user": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "port": process.env.DB_PORT
})

// common pattern for node
// this his how you send a query to your db
connection.query("select now()", function(err, results){
    // what to do when the query finishes executing

    if(err){
        console.log("Connection to database failed");
    } else {
        console.log("Connection to database passed", results);
    }
});

module.exports = connection;