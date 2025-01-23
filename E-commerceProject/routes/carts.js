const express = require('express');

const router = express.Router();

//reveive a post request to ad an item to a cart
router.post('/cart/products', (req, res) => {
    console.log(req.body.productId);

    res.send('Product added to cart')
});
//receive a get request to show all items in cart

//receive a post request to delelte an item from a cart


module.exports = router; 