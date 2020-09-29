const router = require('express').Router()
const categoryController = require('../controller/index').category

router.get('/api/category', categoryController.list)
router.post('/api/category', categoryController.add)

module.exports = router