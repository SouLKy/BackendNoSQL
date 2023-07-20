const model= require('../models/mov_model')

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