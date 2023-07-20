const express = require('express')

const controller = require('../controller/productController')

const router = express.Router()

const path = 'productos'

/**
 * Ruta: /productos GET
 */
router.get(
    `/${path}`,
    controller.getData
)

/**
 * Ruta: /productos Post
 */
router.post(
    `/${path}`,
    controller.insertData
)
module.exports = router