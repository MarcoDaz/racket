const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productName: String,
    department: String,
    prices: [{
        price: Number,
        date: Date
    }]
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product