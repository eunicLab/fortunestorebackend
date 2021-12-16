const Cart = require('../models/cart');
const fs = require('fs');

exports.createCart = (req, res, next) => {
  const cart = new Cart({
    email: req.body.email,
    cartItems: req.body.cartItems,
  });

  cart
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Post saved successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneCart = (req, res, next) => {
  Cart.findOne({
    _id: req.params.id,
  })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyCart = (req, res, next) => {
  const cart = new Cart({
    _id: req.params.id,
    email: req.body.email,
    cartItems: req.body.cartItems,
  });
  Cart.updateOne({ _id: req.params.id }, cart)
    .then(() => {
      res.status(201).json({
        message: 'Cart updated successfully!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteCart = (req, res, next) => {
  Cart.deleteOne({ itemId: req.params.itemId })
    .then(() => {
      res.status(200).json({
        message: 'Deleted!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.getAllCart = (req, res, next) => {
  Cart.find({ email: req.query.email })
    .then((carts) => {
      res.status(200).json(carts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
