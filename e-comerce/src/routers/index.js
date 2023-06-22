const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')

const routes = Router()

routes.get('/',(req,res) => {
    res.send('Sistemas Distribuidos')
} )

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id')
routes.get('/products/:product_id')
routes.delete('/product/:user_id/:product_id')
routes.patch('/products/:user_id/:product_id')

routes.get('/products')
routes.get('/product/:product_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('cart/:cart_id')

module.exports = routes