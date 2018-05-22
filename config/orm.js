var connection = require("../config/connection.js"); 

var orm = {
    all: function (cb){
        var queryString = "SELECT * FROM sandwiches"; 
        connection.query(queryString, function(err, result){
            if (err){
                throw err; 
            }
            cb(result); 
        })
    }, 
    create: function(cols, vals, cb){
        var queryString = "INSERT INTO sandwiches"; 
    }
}


module.exports = orm;