const mongoose =  require('mongoose')

const Schema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        require: 'User'
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    adress: {
        street:{
            type:String,
            required: true
        },
        city:{
            type: String,
            required: true
        }
    },
    paymenet:{
        card:{
            number:{
                type: String,
            },
            cvc:{
                type: String,
                require: true
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)