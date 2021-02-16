const mongoose = require('mongoose')
const Schema = mongoose.Schema

//bounty blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    }, 
    living: {
        type: Boolean,
        required: true
    }, 
    bountyAmount: {
        type: Number,
        required: true
    }, 
    type: {
        type: String,
        required: true,
        enum: ['Sith', 'Jedi']
    }
})

module.exports = mongoose.model('Bounty', bountySchema)