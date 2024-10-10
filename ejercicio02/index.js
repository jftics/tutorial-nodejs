import express from 'express'
import { resolve } from 'node:path'
import { usuarioRouter } from './router/usuario-router.js'

const server = express()
server.set('PORT',process.env.PORT || 3000)

server.use(express.json())
server.use((req,res,nest)=>{
    req.parametro1 = 1
    console.log("middleware procesando...", req.parametro1)
    nest()
})
server.use((req,res,nest)=>{
    req.parametro2 = 2
    console.log("middleware procesando...", req.parametro2)
    nest()
})

server.use('/usuario', usuarioRouter)
server.get('/',(req,res)=>{
    const pathfile = resolve("./views/index.html")
    console.log(pathfile)
    res.sendFile(pathfile)
})


server.use((req,res)=>{
    console.log("pagina no encontrada")
    res.statusCode= 404
    res.send("404")
})


server.listen(server.get('PORT'), ()=>{
    console.log(`Server on port ${server.get('PORT')}`)
})

