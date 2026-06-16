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
        playerAge: {
            type: Number,
        },
        height: {
            type: Number,
        },
        position: {
            type: String,
        },
        playerImage: {
            type: String,
        },
        slug: {
            type: String,
            required: true
        },
    },
    { _id: true }
);

module.exports = PlayerSchema