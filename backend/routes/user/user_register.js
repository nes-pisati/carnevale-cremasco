const express = require('express')
const userRegister = express.Router()

//model
const userModel = require('../../models/user-mod')

//middlewares
const encryptPsw = require('../../middlewares/pswCrypt')

//route
userRegister.post('/user/register', encryptPsw, async (req, res) => {

    const newUser = new userModel({
        username: req.body.username,
        password: req.body.password,
    })

    try {
        const userSaved = await newUser.save()
        return res.status(201).json(userSaved)
    } catch (error) {
        return res.status(404).json({ message: 'Problemi nella creazione dello user', error: error })
    }
})

module.exports = userRegister