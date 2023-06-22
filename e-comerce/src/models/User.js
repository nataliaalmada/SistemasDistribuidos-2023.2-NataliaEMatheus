const mongoose =  require('mongoose')

const Schema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', Schema)