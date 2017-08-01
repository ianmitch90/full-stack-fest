const express = require('express');
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()

// const FPG = require('fake-product-generator')
// const rs = FPG(500)
// const ws = fs.createWriteStream('./data.json')
// rs.pipe(ws)
// const json = require('./data.json')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/fullStack')


app.listen(3000, function(){
  console.log('runnin');
})
