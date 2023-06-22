const mongoose =  require('mongoose')

const Schema = new mongoose.Schema({
    
    productName:{
        type:String,
        require: true
    },
    productPrice:{
        type: Number,
        require: true,
    },

    prductImage:{
        type: String,
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Product', Schema)