const express = require('express')

const controller = require('../controller/smallWarehouseController')

const router = express.Router()

const path = 'smallWarehouse'

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