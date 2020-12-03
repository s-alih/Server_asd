const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.use('/', (req,res) => {
    res.status(200).send('Hello')
})


app.listen(port,() =>{
    console.log('app listening in port')
})