import ex from 'express';
import dir from 'path';

const app = ex()
const dir_front = dir.resolve()
console.log(dir_front);
app.use(ex.static("frontend/build"))

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

app.listen(5500,()=>{
    console.log("Server Started");
});