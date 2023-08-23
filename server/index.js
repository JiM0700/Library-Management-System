const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mysql = require('mysql')

const node = express();
node.use(cors());
node.use(bodyparser.json());
node.use(express.json());
node.use(bodyparser.urlencoded({require:true}));
node.use(express.static('public'));

let link = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Janaki12",
    database: "library_management_system"
}) 

link.connect(function(error){
    if(error) return console.log(error);
    return console.log("Connection Successfull");
})  

//LOGIN

node.post('/login',(request,response)=>{
    let{email_id,password} = request.body;
    let query = "SELECT * FROM library_management_system.books WHERE email_id=? AND password=?"
    link.query(query,[email_id,password],(error,result)=>{
        if(error){ response.send(error)}
        else if(result[0].count>0){
            let info = {code:200}
            response.send(info)
        }
        else {response.send("Error")}
    })
})



// GET ALL BOOK INFO

node.get('/getallbook',(request,response)=>{
    let query = "SELECT * FROM library_management_system.books;"
    link.query(query,(error,result)=>{
        if(error) response.send(error)
        return response.send(result)
    })
})

// GET SPECIFIC BOOK INFO

node.get('/getbook/:s_no',(request,response)=>{
    let{s_no} = request.params;
    let query = "SELECT * FROM library_management_system.books WHERE s_no = ?"
    link.query(query,s_no,(error,result)=>{
        if(error) response.send(error)
        return response.send(result)
    })
})

// GET SPECIFIC USER INFO

node.get('/getalluser',(request,response)=>{
    let query = "SELECT * FROM library_management_system.user;"
    link.query(query,(error,result)=>{
        if(error) response.send(error)
        return response.send(result)
    })
})

//ADD NEW BOOK

node.post("/addbook",(request,response)=>{
    let query = "INSERT INTO library_management_system.books (id,book_title,author,stock,is_active) VALUES (?);";
    // let {id,book_title,author,stock,is_active} = request.body;
    const values = [
        request.body.id,
        request.body.book_title,
        request.body.author,
        request.body.stock,
        request.body.is_active
    ]
    link.query(query,[values],(error,result)=>{
        if(error) response.send(error)
        return response.send(result)
    })
})


//EDIT BOOK INFO

node.put('/editbook/:s_no',(request,response)=>{
    let{s_no} = request.params;
    // let{id,book_title,author,stock,is_active} = request.body;
    let query = "UPDATE library_management_system.books SET id = ? , book_title = ? , author = ? , stock = ? , is_active = ?  WHERE s_no = :sno ;"
    const values = [
        request.body.id,
        request.body.book_title,
        request.body.author,
        request.body.stock,
        request.body.is_active
    ]
    link.query(query,[ values,s_no ],(error,result)=>{
        if(error) response.send(error)
        return response.send(result)
    })

})

//DELETE BOOK INFO

node.delete('/deletebook/:s_no',(request,response)=>{
    let{s_no} = request.params;
    let query = "DELETE FROM library_management_system.books WHERE s_no = ?"
    link.query(query,s_no,(error,result)=>{
        if(error) response.send(error)
        return response.send(result)
    })
})


node.listen(3012,()=> console.log("Running on Port 3012"))