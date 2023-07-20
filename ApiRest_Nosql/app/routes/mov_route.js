const express = require('express')

const controller = require('../controller/movController')

const router = express.Router()

const path = 'movimientos'

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