var con = require('./connection');
var express = require('express');
var app= express();

var bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/register.html');
});


app.post('/', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var mno = req.body.mno;
    con.connect(function(error){
        if(error) throw error;
        var sql = "INSERT INTO students(name, email, mno) VALUES('" + name + "','" + email + "','" + mno + "')";
        con.query(sql, function(error, result){
            if(error) throw error;
            res.redirect("/students");
            // res.send('student Register succesful'+ result.insertId);

        });


    });
});

app.get('/students', function(req,res){
    con.connect(function(error){
        if(error) console.log(error);

        var sql = "select * from students";
        con.query(sql, function(error,result){
            if(error) console.log(error);
            res.render(__dirname+"/students.ejs",{students: result});
        });
    });
});

app.get('/delete-student',function(req,res){
    con.connect(function(error){
        if(error) console.log(error);

        var sql = "delete from students where id=?";
        var id= req.query.id;
        con.query(sql,[id], function(error,result){
            if(error) console.log(error);
            res.redirect('/students.ejs');
        });
    });
});

//add everything from here
app.listen(7000);

