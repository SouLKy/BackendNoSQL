const express = require('express')
const init_db = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const Shipmentroute = require('./app/routes/Shipment_route')
const prodRouter = require('./app/routes/prod_route')
const couchRouter = require('./app/routes/couch_route')

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use('/shp',Shipmentroute)
app.use('/prod',prodRouter)
app.use('/couch',couchRouter)


app.listen(port,() =>{
    console.log('listening on port');
})

init_db()