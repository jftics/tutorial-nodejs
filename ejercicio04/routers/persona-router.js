import { Router } from "express";
import { personaController } from "../controllers/persona-controller.js";
export const personaRouter = Router()

personaRouter.get('/', personaController.getAll)
personaRouter.get('/:id', personaController.getByID)
personaRouter.post('/', personaController.create)
personaRouter.delete('/:id',personaController.delete)
personaRouter.put('/:id', personaController.update)
