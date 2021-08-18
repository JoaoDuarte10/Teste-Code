import { Request, Response } from "express";
import { FindAllCpfUseCase } from "../useCases/CPF/FindAllCpfUseCase";

export class FindAllCpfController {
    constructor(
        private findAllCpfUseCase: FindAllCpfUseCase
    ){}

    async handle(req: Request, res: Response) {
        try {
            const allCpf = await this.findAllCpfUseCase.execute()

            res.json(allCpf)
        }catch(err) {
            res.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}