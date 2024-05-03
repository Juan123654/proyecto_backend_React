import mysql from 'mysql2';//mysql para AWS

const conexion = mysql.createConnection({
    host: "localhost",
    database: "db_actividad",
    user: "root",//para AWS admin
    password: "12345678" //para AWS 12345678
});

conexion.connect((err) => {
    if (err) {
        console.log("Error al conectar a la base de datos: " + err);
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});

export const insert = (usuario, actividad, fecha, horai, horaf) =>{
    conexion.query("INSERT INTO registros (usuario, actividad, fecha, horai, horaf) VALUES ('"+usuario+"','"+actividad+"','"+fecha+"','"+horai+"','"+horaf+"' )", function(err,res){
        if(err){
            console.error("Error al registrar el empleado: ", err);
        }else{
            console.log("Empleado registrado con éxito");
        }
    })
}

export const select = () =>{
    conexion.query("SELECT * FROM registros", function(err,res){
        if(err){
            console.error("Error al realizar la consulta:  ", err);
        }else{
            console.log("Registros obtenidos con éxito:");
            console.log(res); 
        }
    })
}
