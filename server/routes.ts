import { request, response, Router } from "express";
import { addCpfController, allCpfController, checkCpfController, removeCpfController } from "./useCases/CPF";

const router = Router();

router.post('/cpf', (request, response)=>{
    return addCpfController.handle(request, response)
})
router.get('/cpf', (request, response)=>{
    return allCpfController.handle(request, response)
})
router.get('/cpf/:cpf', (request, response)=>{
    return checkCpfController.handle(request, response)
})
router.delete('/cpf/:cpf', (request, response)=>{
    return removeCpfController.handle(request, response)
})

export { router }