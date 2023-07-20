const mongoose = require('mongoose');
const productModel = require('./productModel');

const ShipmentSchema = new mongoose.Schema({
    id_shipment: {
        type: Number,
        required: true,
    },
    id_warehouse: {
        type: Number,
        required: true,
    },
    name_warehouse: {
        type: String,
        required: true,
    },
    request: {
        type: Date,
        required: true,
    },
    departure: {
        type: Date,
    },
    arrival: {
        type: Date,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, // Utilizamos el tipo ObjectId para hacer referencia al modelo Product
        ref: 'Product', // El nombre del modelo que estamos haciendo referencia (debe coincidir con el nombre de exportación en productModel.js)
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    },
    {
        versionKey: false,
        timestamps:true  //createAt, updateAt
    }
);

module.exports = mongoose.model('Shipment', ShipmentSchema);