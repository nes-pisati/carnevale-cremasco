const mongoose = require('mongoose');

//start the server
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL + process.env.DB_NAME)

    } catch(err) {
        console.error(err)
    }
}

module.exports = connect