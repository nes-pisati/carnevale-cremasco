const express = require('express')
const votes = express.Router()

//model
const votesModel = require('../../models/votes-mod')
const carroModel = require('../../models/carri-mod')

//POST

votes.post('/votes/:carroId', async (req, res) => {

    const carroId = req.params.carroId

    const newVote = new votesModel({
        carro: carroId,
        vote: req.body.vote
        //vote: req.body
    })

    try {
        const saveVote = await newVote.save();

        await carroModel.updateOne({_id: carroId}, {$push: {votes: saveVote}})
        return res.status(201).json(saveVote)
    } catch (error) {
        return res.status(500).json({message: 'Problemi con inserimento del voto', error: error})
    }
})

//GET

votes.get('/votes', async (req, res) => {
    try {
        const allVotes = await votesModel.find() //.populate({path: 'carro'})
        return res.status(200).json(allVotes)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nel caricamento dei voti', error: error})
    }  
})

module.exports = votes