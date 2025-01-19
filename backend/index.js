const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

//routes
const carriRoutes = require('./routes/carri/carri_routes')
const votesRoutes = require('./routes/voti/votes_routes')
const userRegister = require('./routes/user/user_register')
const userLogin = require('./routes/user/user_login')
const usersRoutes = require('./routes/user/user_routes')

const app = express();
const PORT = 3002;

//connection to DB
const dbStart = require('./db');
const userModel = require('./models/user-mod');

dbStart()

//middleware
app.use(cors());
app.use(express.json())

app.use('/', carriRoutes)
app.use('/', votesRoutes)
app.use('/', userRegister)
app.use('/', userLogin)
app.use('/', usersRoutes)


//custom middlewares

app.listen(PORT, () => {
    console.log(`Server attivo sulla porta: ${PORT}`);
})
