import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

   const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'tunde@30',
    database:'crude_api'
})

app.get("/", (req, res)=>{
    const sql = "SELECT * FROM employees"
    db.query(sql, (err, result)=>{
        
        if(err) return res.json({Message:"there is error inside this server"});
        return res.json(result)
    })
    
})

app.post('/employees', (req,res)=>{
    const sql = "INSERT INTO employees (name,employee_code,salary) VALUES (?)";
    const values = [
        req.body.name,
        req.body.employee_code,
        req.body.salary
    ]
    db.query(sql, [values], (err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get("/read/:Id", (req, res)=>{
    const sql = "SELECT * FROM employees WHERE id = ?";
    const Id = req.params.Id;

    db.query(sql,  [Id], (err, result)=>{
        
        if(err) return res.json({Message:"there is error inside this server"});
        return res.json(result)
    })
    
})

app.put('/update/:Id', (req,res)=>{
    const sql = 'UPDATE employees SET `name`=?,`employee_code`=?,`salary`=? WHERE id=? ';
    const Id = req.params.Id;
    db.query(sql, [req.body.name, req.body.employee_code, req.body.salary, Id], (err, result) =>{
        if(err) return res.json({Message:"there is error inside this server"});
        return res.json(result);
    })
})
app.delete('/delete/:Id', (req,res)=>{
    const sql = 'DELETE FROM employees WHERE id=?';
    const Id = req.params.Id;
    db.query(sql, [Id], (err, result) =>{
        if(err) return res.json({Message:"there is error inside this server"});
        return res.json(result);
    })
})


app.listen(3000, ()=>{
   console.log('This app is listening to port 3000');
})