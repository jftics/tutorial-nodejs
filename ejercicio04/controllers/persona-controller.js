import { personaModel } from "../models/personaModel.js";

export class personaController{

    static async getAll(req,res){
        const data = await personaModel.getAll()
        if(data){
            res.json({result:'success', data: data.rows})
        }
        else{
            res.json({result:'error', message:'Error el consultar la DB'})
        }

    }
    static async getByID(req,res){
        const id = req.params.id
        const data = await personaModel.getByID(id)
        if(data){
            res.json({result:'success', data: data.rows})
        }
        else{
            res.json({result:'error', message:'Error el consultar la DB'})
        }

    }
    static async create(req,res){
        const body = req.body
        const data = await personaModel.create(body.nombre,body.apellido, body.genero, body.edad)
        if(data){
            res.json({result:'success', data: data.rows})
        }
        else{
            res.json({result:'error', message:'Error el consultar la DB'})
        }

    }
    static async delete(req,res){
        const id = req.params.id
        const data = await personaModel.delete(id)
        if(data){
            res.json({result:'success', data: data.rows})
        }
        else{
            res.json({result:'error', message:'Error el consultar la DB'})
        }

    }
    static async update(req,res){
        const id = req.params.id
        const body = req.body
        const data = await personaModel.update(id, body.nombre,body.apellido, body.genero, body.edad)
        if(data){
            res.json({result:'success', data: data.rows})
        }
        else{
            res.json({result:'error', message:'Error el consultar la DB'})
        }

    }
}