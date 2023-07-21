const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const db_uri = `mongodb+srv://josemarchioni:<password>@cluster-01.rhszwkm.mongodb.net/?retryWrites=true&w=majority`

module.exports = () => {

    const connect = () => {

        mongoose.connect(
            db_uri, 
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology:true
            },
            (err) =>{
                if(err){
                    console.log('DB:Error')
                }else{
                    console.log('Conexion correcta')
                }
            }
        )
    }

    connect();
}