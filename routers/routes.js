const express =require('express')
const res = require('express/lib/response')
const routes = express.Router()

//Consultar todos los libros
routes.get ('/', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * from libro', (err,rows)=>{
            if(err)return res.send(err)

            res.json(rows)
        })
    })
})
//Crear libro
routes.post ('/', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO libro SET ?',[req.body], (err,rows)=>{
            if(err)return res.send(err)

            res.json(rows)
        })
    })
})

//Consultar un libro
routes.get ('/:id', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * from libro WHERE _id = ?',[req.params.id], (err,rows)=>{
            if(err)return res.send(err)

            res.json(rows)
        })
    })
})
// //Actualizar libro
routes.put ('/:id', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE libro SET ? WHERE _id = ?',[req.body, req.params.id], (err,rows)=>{
            if(err)return res.send(err)

            res.json(rows)
        })
    })
})
     
 
// //Eliminar libro
routes.delete ('/:id', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM libro WHERE _id = ?',[req.params.id], (err,rows)=>{
            if(err)return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes