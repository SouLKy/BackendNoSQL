const express = require('express')

const controller = require('../controller/generalStockController')

const router = express.Router()

const path = 'generalStock'

/**
 * Ruta: /Shipment GET
 */
router.get(
    `/${path}`,
    controller.getData
)

/**
 * Ruta: /Shipment Post
 */
router.post(
    `/${path}`,
    controller.insertData
)

/**
 * Ruta: /Shipment/create Post
 
router.post(
    `/${path}/create`,
    controller.createShipment
)*/

module.exports = router