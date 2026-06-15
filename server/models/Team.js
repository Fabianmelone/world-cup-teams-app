const mongoose = require('mongoose');

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
        players: [
            {
                type: Schema.Types.ObjectId,
                ref: "Player",
            }
        ],
    }
);

module.exports = mongoose.model('Team', TeamSchema);