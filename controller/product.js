const models = require('../models/index')
const category = require('./category')

module.exports = {
    add: async (req, res) => {
        try {
            const {
                category_id,
                product_name,
                product_price,
                product_description
            } = req.body
            const data = await models.Product.create({
                category_id: category_id,
                product_name: product_name,
                product_price: product_price,
                product_description: product_description
            })
            res.json({
                message: 'product added successfully.'
            })
        } catch (err) {
            console.log(err.message)
            res.end()
        }
    },
    list: async (req, res) => {
        try {
            const data = await models.Product.findAll({
                include: [{
                    model: models.Category
                }]
            })
            res.json(data)
        } catch (err) {
            console.log(err.message)
            res.end()
        }
    }
}