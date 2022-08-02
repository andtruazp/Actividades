const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
//const morgan =require('morgan');

const routes = require('./routers/routes');

const app = express()
app.set('port', process.env.PORT || 4200)
const dbOptions= {
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'libros'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

app.use ('/api',routes)

app.listen(app.get('port'),()=>{
    console.log('server runningon port', app.get('port'))
});