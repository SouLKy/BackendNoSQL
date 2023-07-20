const express = require('express')

const controller = require('../controller/prodController')

const router = express.Router()

const path = 'productos'

/**
 * Ruta: /user GET
 */
router.get(
    `/${path}`,
    controller.getData
)

module.exports = router