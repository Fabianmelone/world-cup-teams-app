const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema(
    {
        name: { 
            type: String, 
            required: true
        },
        description: {
            type: String
        }
    },  
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Item', ItemSchema);