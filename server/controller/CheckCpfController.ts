import { Request, Response } from "express";
import { CheckCpfUseCase } from "../useCases/CPF/CheckCpfUseCase";

export class CheckCpfController {
    constructor(
        private checkCpfUseCase: CheckCpfUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { cpf } = req.params;
        try {
            const checkCPF = await this.checkCpfUseCase.handle({cpf})
            
            return res.status(200).json(checkCPF)
        }catch(error) {
            res.status(400).json(
                error
            )
        }
    }
}