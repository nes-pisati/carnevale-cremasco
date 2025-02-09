const express = require('express')
const carri = express.Router()

//model

const carriModel = require('../../models/carri-mod')
const votesModel = require('../../models/votes-mod')

//POST

carri.post('/carri', async (req, res) => {
    const obj = req.body

    try {
        const newCarro = carriModel(obj)
        const saveCarro = await newCarro.save()
        return res.status(201).json(saveCarro)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Problemi con inserimento del carro', error: error})
    }
})

//GET

carri.get('/carri', async (req, res) => {
    try {
        const allCarri = await carriModel.find().populate({path: 'votes'})

        const carriTotVoti = allCarri.map(carro => {
            const totVoti = carro.votes.reduce((sum, vote) => sum + vote.vote, 0);

            return {
                ...carro.toObject(),
                totaleVoti: totVoti
            }
        })

        return res.status(200).json(carriTotVoti)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nel caricamento dei carri', error: error})
    }
})

//GET BY ID

carri.get('/carri/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const carro = await carriModel.findById(id)
        return res.status(200).json(carro)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nel caricamento del carro', error: error})
    }
})

//PUT

carri.put('/carri/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const editedCarro = await carriModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editedCarro)
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la modifica del carro', error: error})
    }
})

//DELETE

carri.delete('/carri/:id', async (req, res) => {
    const carroId = req.params.id;
    try {
        const deletedVotes = await votesModel.deleteMany({ carro: carroId });
        const deletedCarro = await carriModel.findByIdAndDelete(carroId);

        if (!deletedCarro) {
            return res.status(404).json({ message: 'Carro non trovato' });
        }

        return res.status(200).json({ 
            message: 'Carro e voti associati rimossi correttamente',
            deletedVotes: deletedVotes.deletedCount
        });

    } catch (error) {
        return res.status(500).json({ message: 'Errore nella cancellazione del carro', error });
    }
});


module.exports = carri