const mongoose = require('mongoose')

const CarriSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        min: 25
    },
    team: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "https://fakeimg.pl/600x400?text=image&font=bebas"
    },
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Voti',
        required: true,
        default: []
    }]
}, { timestamps: true, strict: true })

const carriModel = mongoose.model('Carri', CarriSchema)
module.exports = carriModel