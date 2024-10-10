import express from 'express'
import { personaRouter } from './routers/persona-router.js'

const server = express()
server.set('PORT', process.env.PORT || 3000)

server.use(express.json())
server.use('/persona', personaRouter )

server.get('/',(req, res)=>{
    res.send("Bienenido")
})


server.listen(server.get('PORT'), ()=>{
    console.log(`Server on port ${server.get('PORT')}`);
})

