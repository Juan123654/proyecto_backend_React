import mysql from 'mysql';

const conexion = mysql.createConnection({
    host: "db-main.cpci4oeysiib.us-east-1.rds.amazonaws.com",
    database: "db_actividad",
    user: "admin",
    password: "1234568"
});

conexion.connect((err) => {
    if (err) {
        console.log("Error al conectar a la base de datos: " + err);
    } else {
        console.log("Conexión exitosa a la base de datos");
        // Aquí puedes realizar consultas u otras operaciones en la base de datos
    }
});