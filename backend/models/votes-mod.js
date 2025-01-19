const mongoose = require('mongoose');

const VotesSchema = new mongoose.Schema({
    carro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carri'
    },
    vote: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    }
})

const voteModel = mongoose.model('Voti', VotesSchema)
module.exports = voteModel