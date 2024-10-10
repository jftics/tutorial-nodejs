import { Router } from "express";

export const usuarioRouter = Router()

usuarioRouter.get('/', (req,res)=>{
    res.send("usuarios")
})

usuarioRouter.post('/', (req, res)=>{
    console.log(req.body, req.parametro1);
    res.send(req.body)
})


