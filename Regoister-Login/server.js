const express = require('express')
const path =require ('path')
const morgan = require('morgan')
const app = express();
app.use ('/',express.static(path.join(__dirname,'static')))
app.use(morgan('dev'))

app.get('/', function (req, res) {
    res.send('hello, world!')
  })

const port = process.env.PORT || 2020
app.listen(port,()=>console.log('listeng on port 2020...'))