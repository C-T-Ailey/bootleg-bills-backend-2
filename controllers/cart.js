const {Cart} = require('../models/Cart')
const {Product} = require('../models/Product')
const {Order} = require('../models/Order')

const moment = require('moment');


// exports.cart_create_get = async (req, res) => {
//     console.log("GET API connecting")
//     console.log(req.body)

// }

// Cart POST: saving cart contents to the database
exports.cart_create_post = (req, res) => {
    console.log("POST API connecting")
    console.log(req.body)
    console.log(req)
    let cart = new Cart (req.body);
    cart.save()
    .then((cart) => {
        res.json({cart})
    })
    .catch((error) => {
        console.log(error)
        res.send("cannot confirm cart, try again later")
    })
}

// Order POST: saving order form contents to the database
exports.order_create_post = (req, res) => {
    console.log("order API connecting")
    console.log(req.body)
    let order = new Order (req.body);
    order.save()
    .then((order) => {
        res.json({order})
    })
    .catch((error) => {
        console.log(error)
        res.send("cannot accept order, please try again later")
    })
}

// Order GET: fetch all orders in the DB
exports.order_index_get = (req, res) =>  {
    Order.find()
    .then(order => {
        res.json(order)
    })
    .catch((err) => {
        console.log(err)
        res.send("Whoops! Couldn't get the orders.")
    })
}

// Order GET: fetch order by ID
exports.order_detail_get = (req, res) => {
    console.log("Query ID:", req.query.id)
    Order.findById(req.query.id)
    .then(order => {
        res.json(order)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Order PUT: find and update
exports.order_update_put = (req, res) => {
    console.log("id:", req.body._id, "body:", req.body)
    Order.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(product => {
    res.json({product})
    })
    .catch(err => {
        console.log(err)
    })
}

// const cart = async () => {
//     const carts = await Cart.find().populate({
//         path: "product",
//         model: "Product"
//     });
//     return carts[0];
// };

// const addProduct = async payload => {
//     const cartItem = await Cart.create(payload);
//     return cartItem
// }

// const getProduct = async id => {
//     const product = await Product.findById(id);
//     return product;
// }

// exports.addCartItem = async (req, res) => {
//     console.log("add item to cart")
//     console.log(req.body)
//     const { Product } = req.body;
//     console.log(Product)
//     try {
//         let cart = await cart();
//         let product = await getProduct(Product.id)
//         if (!product) {
//             return res.status(500).json({
//                 type: "Not Found",
//                 msg: "Invalid Request"
//             })
//         }
//         if (cart) {
//             indexExists = cart.
//         }
//     }
// }