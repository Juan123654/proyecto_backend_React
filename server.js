import ex from 'express';
import dir from 'path';
import insert from './db.js';

const app = ex()
const dir_front = dir.resolve()
console.log(dir_front);
app.use(ex.static("frontend/build"))

app.use(ex.json())
app.use(ex.urlencoded())

//rutas get
app.get('/', function(req, res){
res.sendFile(dir_front + "/frontend/build/index.html")
});
app.get('/home', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
});
app.get('/registro', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
});
app.get('/consulta', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
});

//rutas post
app.post("/registro_actividades", (req, res) => {
    let { usuario, actividad, fecha, horai, horaf } = req.body;
    insert(usuario, actividad, fecha, horai, horaf);
});

app.listen(8080,()=>{
    console.log("Server Started");
});