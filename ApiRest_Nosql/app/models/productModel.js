const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {

        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },

    {
        versionKey: false,
        timestamps:true  //createAt, updateAt
    }
);

module.exports = mongoose.model('Product', ProductSchema)