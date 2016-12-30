// Nodejs express CRUD using mongodb server side app
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

// Grab the MongoLab - mlab MongoDB URI string from the DB_ENV environment var
const MyDB = process.env.DB_ENV

var db

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

MongoClient.connect(MyDB, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
