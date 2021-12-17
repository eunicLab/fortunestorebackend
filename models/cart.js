const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  email: { type: String, required: true },
  cartItems: { type: Array, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
