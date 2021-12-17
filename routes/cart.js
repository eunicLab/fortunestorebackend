const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const cartCtrl = require('../controllers/cart');

router.get('/', auth, cartCtrl.getAllCart);
router.post('/', auth, cartCtrl.createCart);
router.get('/:id', auth, cartCtrl.getOneCart);
router.put('/:id', auth, cartCtrl.modifyCart);
router.delete('/:id', auth, cartCtrl.deleteCart);

module.exports = router;
