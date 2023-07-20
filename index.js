const express = require('express');
const bodyParser = require('body-parser');
const couchBase = require('./routes/couchBase');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware body-parser
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

// Otros middlewares y configuraciones de Express aquí

// Rutas
app.use('/couchBase', couchBase);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en ${port}`);
});
console.log("Servidor iniciado");