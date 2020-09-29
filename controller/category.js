const models = require('../models/index')

module.exports = {
    add: async (req, res) => {
        try {
            const {
                category_name
            } = req.body
            const data = await models.Category.create({
                category_name: category_name
            })
            return res.json({
                message: 'category added successfully.'
            })
        } catch (err) {
            console.log(err.message)
            res.end()
        }
    },
    list: async (req, res) => {
        try {
            const data = await models.Category.findAll({
                include: [{
                    model: models.Product,
                    as: 'products'
                }]
            })
            res.json(data)
        } catch (err) {
            console.log(err.message)
            res.end()
        }
    }
}