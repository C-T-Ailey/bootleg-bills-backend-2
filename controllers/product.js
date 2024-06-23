// product_index_get

const { Product } = require("../models/Product")

const moment = require('moment');
const { Order } = require("../models/Order");


// PRODUCT POST - CREATE
exports.product_index_post = (req, res) => {
    
    let product = new Product(req.body);
    console.log(req.body)

    product.save()
    .then((product) => {

        res.json({product})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry, please try again...");
    })
}


// PRODUCT GET - READ ALL
exports.product_index_get = (req, res) => {

    Product.find()
    .then(product => {

        res.json({product})
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again!!!")
    })
}

// PRODUCT GET - UPDATE
exports.product_edit_get = (req, res) => {
    console.log("REQ QUERY", req.query)
    Product.findById(req.query.id)
    .then((product) => {
        res.json({product})
    })
    .catch( err => {
        console.log(err)
    })
}

// PRODUCT PUT - UPDATE
exports.product_update_put = (req, res) => {
    console.log("id:", req.body._id, "body:", req.body)
    Product.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(product => {
    res.json({product})
    })
    .catch(err => {
        console.log(err)
    })
}


// PRODUCT DELETE - DELETE
exports.product_delete_get = (req, res) => {
    console.log(req.query.id)
    Product.findByIdAndDelete(req.query.id)
    .then( (product) => {
        res.json({product})
    })
    .catch(err => {
        console.log(err)
    })
}

// PRODUCT GET - READ DETAIL
exports.product_detail_get = (req, res) => {

    Product.findById(req.query.id)
    .then(product => {
        res.json({product})
    })
    .catch(err => {
        console.log(err )
    })
}