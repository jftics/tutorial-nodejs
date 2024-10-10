import { Router } from "express";
import { db_pg } from "../db/db_pg.js";



export const personaRouter = Router()

personaRouter.get('/', async (req, res)=>{
    const p = {'nombre':'juan'}
    const query = "SELECT id_persona, nombre, apellido, genero, edad 	FROM public.persona;"
    let data = await db_pg.execute(query)
    if(data){
        console.log(data);
        res.send(data.rows)
    }
    else{
        res.statusCode = 500
        res.send({result:'error', mensaje:"Error el ejecutar la consulta"})
    }
    
})

personaRouter.post('/', async (req,res)=>{
    let body = req.body
    const query="INSERT INTO public.persona( nombre, apellido, genero, edad) VALUES ( $1, $2, $3, $4) RETURNING id_persona, nombre, apellido, genero, edad;"
    const parametros = [body.nombre, body.apellido, body.genero, body.edad]

    let data = await db_pg.execute(query, parametros)
    if(data){
        console.log(data);
        res.send(data.rows)
    }
    else{
        res.statusCode = 500
        res.send({result:'error', mensaje:"Error el ejecutar la consulta"})
    }

})
