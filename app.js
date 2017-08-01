const express = require('express');
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()
const FPG = require('fake-product-generator')
const rs = FPG(3)
const ws = fs.createWriteStream('./data.json')

rs.pipe(ws)

mongoose.Promise = require('bluebird')

app.listen(3000, function(){
  console.log('runnin');
})
