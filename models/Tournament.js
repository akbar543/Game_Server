const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({


    Mode: {
        type: String,
        required: true
    },
    Server: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    Time: {
        type: String,
        required: true
    },

    teams: [{type: mongoose.Types.ObjectId, ref: "Team"}]
})


module.exports = mongoose.model('Tournament',alienSchema)