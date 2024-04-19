import mysql from 'mysql';

const conexion = mysql.createConnection({
    host: "db-main.cpci4oeysiib.us-east-1.rds.amazonaws.com",
    database: "db_actividad",
    user: "admin",
    password: "12345678"
});

conexion.connect((err) => {
    if (err) {
        console.log("Error al conectar a la base de datos: " + err);
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});

export function insert(nombre_usuario, actividad, fecha, hora_inicio, hora_final){
    conexion.query("INSERT INTO records VALUES (" + nombre_usuario + ",'" + actividad + "','" + fecha + "','" + hora_inicio + "','" + hora_final + "')",function(err,result){
        if(err){
            console.log(err)
        }else{
            console.log("Registro exitoso")
        }
    })
}