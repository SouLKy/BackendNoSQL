const ProductModel  = require('../models/productModel')

exports.createProduct = async (req, res) => {
    try {
        const { id, name, type } = req.body;

        const newProduct = new ProductModel({ id, name, type });
        const createdProduct = await newProduct.save();

        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
};

/** 
 * GET 
 */
exports.getData = (req, res) => {
    ProductModel.find({}, (err, docs) => {
        res.send(docs);
    })
}

/**
 * INSERT 
 */
exports.insertData = (req, res) => {
    const data = req.body
    ProductModel.create(data,(err, docs) => {
        res.send( docs )
    })
}