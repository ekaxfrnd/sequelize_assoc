const express = require('express')

const logger = require('morgan')

const app = express()
const host = 'localhost'
const port = 4000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(logger('dev'))

app.use('/', require('./router/index').product)
app.use('/', require('./router/index').category)

app.listen(port, () => {
    console.log(`listening on: http://${host}:${port}`)
})