const mongoose = require('mongoose');
const playerSchema = require('./Player');
const { Schema } = mongoose;

const TeamSchema = new Schema(
    {
        countryName: { 
            type: String, 
            required: true
        },
        countryFlag: {
            type: String,
        },
        players: [playerSchema],
        slug: {
            type: String,
            required: true
        },
    },
    { _id: true }
);

module.exports = mongoose.model('Team', TeamSchema);