const SmallWarehouseModel = require('../models/smallWarehouseModel');

exports.insertData = async (req, res) => {
    try {
        const stock = [];
        const id = req.body.id;
        const name = req.body.name;
        stock = req.body.stock

        const newSmallWarehouse = new SmallWarehouseModel({ id, name, stock });
        const createdSmallWarehouse = await newSmallWarehouse.save();

        res.status(201).json(createdSmallWarehouse);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el almacén pequeño', error: error.message });
    }
};

/** 
 * GET 
 */
exports.getData = (req, res) => {
    SmallWarehouseModel.find({}, (err, docs) => {
        res.send( docs );
    })
}

/**
 * INSERT 
 
exports.insertData = (req, res) => {
    const data = req.body
    SmallWarehouseModel.create(data,(err, docs) => {
        res.send( docs)
    })
}*/