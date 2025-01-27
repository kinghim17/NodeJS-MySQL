// var con = require('./connection');
// var express = require('express');
// var app= express();

// var bodyParser =  require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/',function(req,res){
//     res.sendFile(__dirname + '/register.html');
// });

// app.post('/', function(req,res){
//     var name = req.body.name;
//     var email = req.body.email;
//     var mno = req.body.mno;
//     con.connect(function(error){
//         if(error) throw error;
//         var sql = "INSERT INTO students(name, email, mno) VALUES('" + name + "','" + email + "','" + mno + "')";
//         con.query(sql, function(error, result){
//             if(error) throw error;
//             res.send('Student Register succesful'+ result.insertId);
//         });


//     });
// }) //there is a ??? method to send a request check it out

// app.listen(7000);