const mongoose = require('mongoose');

const GeneralStockSchema = new mongoose.Schema({
    id_warehouse: {
        type: Number,
        required: true,
    },
    name_warehouse: {
        type: String,
        required: true,
    },
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

module.exports = mongoose.model('GeneralStock', GeneralStockSchema);