import {
    connect,
    connection
} from 'mongoose'


const conexion = {
    isConnected: false
}

export async function dbConnect() {

    if(conexion.isConnected) return;
    const db = await connect(process.env.MONGODB_URL)
    conexion.isConnected = db.connections[0].readyState
    console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
    console.log("mongo db conectado")
})

connection.on("error", (err) => {
    console.log(err)
})