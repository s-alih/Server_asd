const express = require('express')
const mysql = require('mysql')
const config =  require('./db/sql')
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000

let connection = mysql.createConnection(config)



const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templets/views')
const partialsPath = path.join(__dirname,'../templets/partials')

app.use(express.json())

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

app.get('', (req,res) => {
    res.render('home')
})
app.get('/home',async (req,res) =>{
    const name = req.query.name
    const password = req.query.password
    const mobile = req.query.mobile
   
    const id = parseInt(Math.random(10) * 10000)
    let sql =` INSERT INTO signin(u_id,u_name,u_password,u_mobile_number) VALUES (${id},'${name}',${password},${mobile})`;
     connection.query(sql,(err, results, fields) => {
        if (err) {
          return res.render('oops')
        }else{
            res.render('home',{
                name,  
            })
        }
        
      })   
})

app.get('/booking', (req,res) => {
    const departure = req.query.departure
    const destination = req.query.destination
    const first = req.query.first
    const second = req.query.second

    res.render('booking',{
        departure,
        destination,
        first,
        second,
    })
})
app.get('/booked',(req,res) =>{
    const departure = req.query.departure
    const destination = req.query.destination
    const flight = req.query.flight
    const price = req.query.price
    const date = req.query.date
    const id = parseInt(Math.random(10) * 10000)
    let sql =` INSERT INTO booking(u_id,departure,destination,flight,price,Date) VALUES (${id},'${departure}','${destination}','${flight}','${price}','${date}')`;
     connection.query(sql,(err, results, fields) => {
        if (err) {
          return res.send(err)
        }else{
            res.render('done')
        }
        
      })   

    
})


app.listen(port,() =>{
    console.log('app listening in port')
})