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

//DELETE

// DELETE
votes.delete('/votes/delete-votes', async (req, res) => {
    console.log("DEBUG BE", req.body);
    const { carroId } = req.body; 

    if (!carroId) {
        return res.status(400).json({ message: 'ID del carro non fornito' });
    }

    try {
        // Rimuovi i voti associati al carro specificato
        const result = await votesModel.deleteMany({ carro: carroId });

        // Verifica se sono stati effettivamente cancellati dei voti
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Nessun voto trovato per il carro specificato' });
        }

        // aggiorna il modello del carro per rimuovere la lista dei voti
        await carroModel.updateOne(
            { _id: carroId },
            { $set: { votes: [] } }
        );

        return res.status(200).json({ message: `Tutti i voti associati al carro ${carroId} sono stati cancellati` });
    } catch (error) {
        return res.status(500).json({ message: 'Errore nella cancellazione dei voti', error: error });
    }
});


module.exports = votes