const express = require('express')

const controller = require('../controller/shipmentController')

const router = express.Router()

const path = 'Shipment'

/**
 * Ruta: /mov GET
 */
router.get(
    `/${path}`,
    controller.getData
)

/**
 * Ruta: /mov Post
 */
router.post(
    `/${path}`,
    controller.insertData
)

module.exports = router