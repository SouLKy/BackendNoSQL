const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    id_product: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
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

const SmallWarehouseSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        stock: [StockSchema], // Asociamos el modelo de Stock como un array dentro de SmallWarehouse
    },
    {
        versionKey: false,
        timestamps:true  //createAt, updateAt
    }
);

module.exports = mongoose.model('SmallWarehouse', SmallWarehouseSchema);