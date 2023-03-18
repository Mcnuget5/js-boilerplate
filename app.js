require('dotenv').config()
const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const port = 3000

app.use(logger('dev'))

app.use((req, res, next) => {
    next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('pages/index', {
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
