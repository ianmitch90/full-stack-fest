const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  part_number: Number,
  name: String,
  description: String,
  supplier: String,
  vendor: String,
  vendor_part_number: Number,
  vendor_description: String,
  price: String,
  image: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
