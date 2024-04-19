import mysql from 'mysql'

mysql.createConnection({
    host:"db-main.cpci4oeysiib.us-east-1.rds.amazonaws.com",
    database:"db_actividad",
    user:"admin",
    password:"12345678"
})

conexion.connect((err)=>{
    if(err){
        console.log("Error al conectar a la DB" + err)
    }else{
        console.log("Conexion exitosa")
    }
})