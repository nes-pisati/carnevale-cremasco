const express = require('express')
const users = express.Router()

//model
const userModel = require('../../models/user-mod')

//GET

users.get('/user', async (req, res) => {
    try {
        const allUsers = await userModel.find()
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json({message: 'Problemi nel caricamento dei carri', error: error})
    }
})

//POST

//PUT

//DELETE

users.delete('/user/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        await userModel.findByIdAndDelete(userId)
        
        return res.status(200).json({message: 'User rimosso correttamente'})
    } catch (error) {
        return res.status(500).json({message: 'Problemi con la cancellazione del carro', error: error})
    }
})

module.exports = users