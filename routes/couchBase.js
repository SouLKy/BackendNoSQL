const { Cluster, connect } = require("couchbase");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

async function initializeCouchbase() {
  try {
    const cluster = await connect("couchbases://cb.qmvtz39bbnhpghbe.cloud.couchbase.com", {
      username: "tym",
      password: "xRopture9900!"
    });

    const bucket = cluster.bucket("Warehouse");
    const collection = bucket.defaultCollection();
    console.log("CONECTADO");

    const getDoc = async (key) => {
      const result = await collection.get(key);
      return result.content;
    };

    const insertDoc = async () => {
      const key = "1"; // id
      const value = { time: 12345, stock: 2 };
      try {
        await collection.upsert(key, value);
        console.log("Documento insertado", await getDoc(key));
      } catch (error) {
        console.log("Error al insertar", error);
      }
    };

    await insertDoc();
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

router.get('/', async (req, res) => { 
res.json({hola: "ASDASDASD"});
});  
// Exporta el enrutador para su uso en tu aplicación de Express
module.exports = router;
