const GeneralStockModel = require('../models/generalStockModel');

exports.createGeneralStock = async (req, res) => {
    try {
        const { id_warehouse, name_warehouse, id_product, name, quantity } = req.body;

        const newGeneralStock = new GeneralStockModel({ id_warehouse, name_warehouse, id_product, name, quantity });
        const createdGeneralStock = await newGeneralStock.save();

        res.status(201).json(createdGeneralStock);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el stock general', error: error.message });
    }
};

/** 
 * GET 
 */
exports.getData = (req, res) => {
    GeneralStockModel.find({}, (err, docs) => {
        res.send({ docs });
    })
}

/**
 * INSERT 
 */
exports.insertData = (req, res) => {
    const data = req.body
    GeneralStockModel.create(data,(err, docs) => {
        res.send({ data:docs })
    })
}