const mongoose = require('mongoose')

const MovScheme = new mongoose.Schema(
    {
        fecha:{
            type: String 
        },
        id_bodega:{
            type: Number
        },
        traslado:{
            type: Number
        },
    },
    {
        versionKey: false,
        timestamps:true  //createAt, updateAt
    }
)

module.exports = mongoose.model('mov_model', MovScheme)