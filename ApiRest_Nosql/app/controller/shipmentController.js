const model= require('../models/shipmentModel')
const ProductModel = require('../models/productModel'); // Importa también el modelo de Product

exports.createShipment = async (req, res) => {
    try {
        const { id_shipment, id_warehouse, name_warehouse, request, departure, arrival, product, quantity } = req.body;

        // Antes de crear el envío, asegúrate de que el producto exista en la base de datos
        const existingProduct = await ProductModel.findOne({ _id: product });

        if (!existingProduct) {
            return res.status(400).json({ message: 'El producto especificado no existe.' });
        }

        const newShipment = new ShipmentModel({ id_shipment, id_warehouse, name_warehouse, request, departure, arrival, product, quantity });
        const createdShipment = await newShipment.save();

        res.status(201).json(createdShipment);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el envío', error: error.message });
    }
};

/** 
 * GET 
 */
exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({ docs });
    })
}

/**
 * INSERT 
 */
exports.insertData = (req, res) => {
    const data = req.body
    model.create(data,(err, docs) => {
        res.send({ data:docs })
    })
}