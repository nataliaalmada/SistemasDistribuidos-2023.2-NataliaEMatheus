const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routers')

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('connect to database'))

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 3333, () => console.log('server Running'))