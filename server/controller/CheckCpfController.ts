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
            if(!checkCPF) res.status(400).json({
                message: "CPF not exists"
            })
            return res.status(200).json(checkCPF)
        }catch(err) {
            res.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}