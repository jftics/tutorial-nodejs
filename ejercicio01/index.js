import { createServer } from 'node:http'
import { readFile } from 'node:fs';

const server = createServer( (req, res)=>{
    console.log("Procesando solicitud");

    readFile('./texto.txt','utf-8', (err, data)=>{
        console.log("contenido del archivo: ",data)
    })
    
    console.log("realizando otro proceso")

    res.end("Hola mundo")
} )

server.listen(3000, ()=>{
    console.log("el servidor esta escuchando en el puerto 3000");
})