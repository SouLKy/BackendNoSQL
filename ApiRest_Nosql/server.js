const express = require('express')
const init_db = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const movRouter = require('./app/routes/mov_route')
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

app.use('/mov',movRouter)
app.use('/prod',prodRouter)
app.use('/couch',couchRouter)


app.listen(port,() =>{
    console.log('listening on port');
})

init_db()