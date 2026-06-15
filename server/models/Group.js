const mongoose = require('mongoose');

const { Schema } = mongoose;

const GroupSchema = new Schema(
    {
        groupName: { 
            type: String, 
            required: true
        },
        groupColor: {
            type: String,
        }, 
        teams: [
            {
                type: Schema.Types.ObjectId,
                ref: "Team",
            }
        ], 
    }
);

module.exports = mongoose.model('Group', GroupSchema);