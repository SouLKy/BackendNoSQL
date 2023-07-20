const { Cluster, connect } = require("couchbase");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
let bucketMovimientos;
let collectionMovimientos;
let bucketAgotamiento;
let collectionAgotamiento;

async function initializeCouchbase() {
  try {
    const cluster = await connect("couchbases://cb.qmvtz39bbnhpghbe.cloud.couchbase.com", {
      username: "tym",
      password: "xRopture9900!"
    });

    bucketMovimientos = cluster.bucket("Movimientos");
    bucketAgotamiento = cluster.bucket("Agotamiento")
    collectionMovimientos = bucketMovimientos.defaultCollection();
    collectionAgotamiento = bucketAgotamiento.defaultCollection();
    console.log("CONECTADO COUCHBASE");
    
  } catch (error) {
    console.error('Error al conectar con Couchbase:', error);
    // Realiza cualquier otra acción necesaria para manejar el error.
    process.exit(1);
  }
}

// Llama a la función para inicializar Couchbase
initializeCouchbase()
  .catch((err) => {
    console.log("Error: ", err);
    process.exit(1);
  });

  router.get('/getAgotamiento', async (req, res) => { 
    const id = req.body.id
    const result = await collectionAgotamiento.get(id);
    res.json(result.content);
  });
  
  router.post('/agotamiento', async (req, res) =>{
    const id = req.body.id;
    const value = { id_warehouse: req.body.id_warehouse,
      id_product: req.body.id_product,
      cantidad: req.body.cantidad,
      tiempo: req.body.tiempo 
    };
    try {
        await collectionAgotamiento.upsert(id, value);
        res.json({Mensaje: "Datos insertados correctamente"});
    } catch(error) {
        console.log("Error al insertar",error);
    }
  });

router.get('/getMovimiento', async (req, res) => { 
  const id = req.body.id
  const result = await collectionMovimientos.get(id);
  res.json(result.content);
});

router.post('/movimiento', async (req, res) =>{
  const id = req.body.id;
  const value = { id_warehouse: req.body.id_warehouse,time: req.body.time };
  try {
      await collectionMovimientos.upsert(id, value);
      res.json({Mensaje:"Datos insertados correctamente"});
  } catch(error) {
      console.log("Error al insertar",error);
  }
});
// Exporta el enrutador para su uso en tu aplicación de Express
module.exports = router;