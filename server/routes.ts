import { request, response, Router } from "express";
import { addCpfController, allCpfController } from "./useCases/CPF";

const router = Router();

router.post('/cpf', (request, response)=>{
    return addCpfController.handle(request, response)
})
router.get('/cpf', (request, response)=>{
    return allCpfController.handle(request, response)
})

export { router }