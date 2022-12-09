const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors())

//Parametros de conexion
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pw'
})

//Nos conectamos
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa");
    }
})

app.get('/',function(req, res){
    res.send("Ruta de inicio del servidor")
})

app.get('/api/articulos',(req, res)=>{
    conexion.query('SELECT * FROM articulos', (error, filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas)
        }
    })
})

app.get('/api/cliente',(req, res)=>{
    conexion.query('SELECT * FROM cliente', (error, filas)=>{
        if(error){
            res.sendStatus(501);
        }else{
            res.send(filas)
        }
    })
})

app.get('/api/proveedor',(req, res)=>{
    conexion.query('SELECT * FROM proveedor', (error, filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas)
        }
    })
})

app.get('/api/articulos/:id',(req, res)=>{
    const {id} = req.params
    conexion.query('SELECT * FROM articulos WHERE id = ?',[id]  , (error, fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

app.post('/api/articulos',(req,res)=>{
    let data = {descripcion:req.body.descripcion,
                precio:req.body.precio,
                cantidad:req.body.cantidad}
    let sql = "INSERT INTO articulos SET ?"
    conexion.query(sql, data, function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

app.put('/api/articulos/:id',(req, res)=>{
    let id = req.params.id
    let descripcion = req.body.descripcion
    let precio = req.body.precio
    let cantidad = req.body.cantidad
    let sql = "UPDATE articulos SET descripcion = ?, precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql,[descripcion,precio,cantidad,id], function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

app.delete('/api/articulos/:id',(req, res)=>{
    let id = req.params.id
    conexion.query('DELETE FROM articulos WHERE id = ?',[id],function(error, filas){
        if(error){
            throw error
        }{
            res.send(filas)
        }
    })
})

app.get('/api/proveedor/:id',(req, res)=>{
    const {id} = req.params
    conexion.query('SELECT * FROM proveedor WHERE id = ?',[id]  , (error, fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

app.post('/api/proveedor',(req,res)=>{
    let data = {nombre:req.body.nombre,
                direccion:req.body.direccion,
                rfc:req.body.rfc
                }
    let sql = "INSERT INTO proveedor SET ?"
    conexion.query(sql, data, function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

app.put('/api/proveedor/:id',(req, res)=>{
    let id = req.params.id
    let nombre = req.body.nombre
    let rfc = req.body.rfc
    let direccion = req.body.direccion
    let sql = "UPDATE proveedor SET nombre = ?, rfc = ?, direccion = ? WHERE id = ?";
    conexion.query(sql,[nombre,rfc,direccion,id], function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

app.delete('/api/proveedor/:id',(req, res)=>{
    let id = req.params.id
    conexion.query('DELETE FROM proveedor WHERE id = ?',[id],function(error, filas){
        if(error){
            throw error
        }{
            res.send(filas)
        }
    })
})

app.get('/api/cliente/:id',(req, res)=>{
    const {id} = req.params
    conexion.query('SELECT * FROM cliente WHERE id = ?',[id]  , (error, fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila)
        }
    })
})

app.post('/api/cliente',(req,res)=>{
    let data = {nombre:req.body.nombre,
                direccion:req.body.direccion,
                rfc:req.body.rfc,
                }
    let sql = "INSERT INTO cliente SET ?"
    conexion.query(sql, data, function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})

app.put('/api/cliente/:id',(req, res)=>{
    let id = req.params.id
    let nombre = req.body.nombre
    let direccion = req.body.direccion
    let rfc = req.body.telefono
    let sql = "UPDATE cliente SET nombre = ?, direccion = ?, rfc = ? WHERE id = ?";
    conexion.query(sql,[nombre,direccion,rfc,id], function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
})

app.delete('/api/cliente/:id',(req, res)=>{
    let id = req.params.id
    conexion.query('DELETE FROM cliente WHERE id = ?',[id],function(error, filas){
        if(error){
            throw error
        }{
            res.send(filas)
        }
    })
})


let puerto = 3000;
app.listen(puerto, function(){
    console.log('Servidor ok en puerto: '+puerto);
});