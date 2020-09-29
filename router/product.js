const router = require('express').Router()
const productController = require('../controller/index').product

router.get('/api/product', productController.list)
router.post('/api/product', productController.add)

module.exports = router