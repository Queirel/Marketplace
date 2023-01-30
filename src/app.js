require('dotenv').config()
// require('./models/users.models')
const express = require('express')
const app = express()
const transactionsRoutes = require('./routes/transactions.routes')
const productsRoutes = require('./routes/products.routes')
const userRoutes = require('./routes/users.routes')
const loginRoutes = require('./routes/sing.routes')
const sequelize = require('./models/index')
const middleware = require('./middleware/auth.middleware')

// sequelize.sync({force:true})


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(middleware)

app.use('/sing', loginRoutes)
app.use('/users', userRoutes)
app.use('/products', productsRoutes)
app.use('/transactions', transactionsRoutes)

module.exports = app