const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema(
    {
        playerName: { 
            type: String, 
            required: true
        },
        playerNumber: {
            type: String,
        }, 
        height: {
            type: Number,
        },
        position: {
            type: String,
        },
        playerImage: {
            type: String,
        }
    }
);

module.exports = mongoose.model('Player', PlayerSchema);