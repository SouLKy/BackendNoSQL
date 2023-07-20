const model= require('../models/shipmentModel')
const ProductModel = require('../models/productModel'); // Importa también el modelo de Product


// shipmentController.js

exports.insertData = async (req, res) => {
    try {
        const { id_shipment, id_warehouse, name_warehouse, request, departure, arrival, product, quantity } = req.body;

        // Solo extraer el id del producto de req.body.product
        const productId = product;

        // Antes de crear el envío, asegúrate de que el producto exista en la base de datos
        const existingProduct = await ProductModel.findOne({ id: productId });

        if (!existingProduct) {
            return res.status(400).json({ message: 'El producto especificado no existe.' });
        }

        const newShipment = new model({ id_shipment, id_warehouse, name_warehouse, request, departure, arrival, product: existingProduct._id, quantity });
        const createdShipment = await newShipment.save();

        res.status(201).json(createdShipment);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el envío', error: error.message });
    }
};


/** 
 * GET 
 */
exports.getData = async (req, res) => {
    try {
        const docs = await model.find({});

        // Utiliza Array.map para generar un nuevo array con las promesas
        const promises = docs.map(async x => {
            const existingProduct = await ProductModel.findOne({ _id: x.product });
            x.product = existingProduct;
            return x; // Es importante devolver x para que el nuevo array contenga los objetos modificados
        });

        // Espera a que todas las promesas se resuelvan
        const updatedDocs = await Promise.all(promises);

        res.send(updatedDocs);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
};


/**
 * INSERT 
 
exports.insertData = (req, res) => {
    const data = req.body.product
    model.create(data,(err, docs) => {
        res.send( docs )
    })
}*/