const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({


    TeamName: {
        type: String,
        required: true
    },
    Player1: {
        type: String,
        required: true
    },
    Player1TagLine: {
        type: String,
        required: true
    },
    Player2: {
        type: String,
        required: true
    },
    Player2TagLine: {
        type: String,
        required: true
    },
    Player3: {
        type: String,
        required: true
    },
    Player3TagLine: {
        type: String,
        required: true
    },
    Player4: {
        type: String,
        required: true
    },
    Player4TagLine: {
        type: String,
        required: true
    },
    Player5: {
        type: String,
        required: true
    },
    Player5TagLine: {
        type: String,
        required: true
    },
    TourId: {
        type: mongoose.Types.ObjectId,
        ref: "tournament",
        required: true
      },

})


module.exports = mongoose.model('Team',alienSchema)