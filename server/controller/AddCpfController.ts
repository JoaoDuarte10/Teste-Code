import { Request, Response } from "express";
import { AddCpfUseCase } from "../useCases/CPF/AddCpfUseCase";

export class AddCpfController {
    constructor(
        private addCpfUseCase: AddCpfUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        let { cpf } = req.body;
        cpf = cpf.replace(/[^\d]+/g,'');

        try {
            await this.addCpfUseCase.execute({cpf})
            return res.status(201).json({
                message: "CPF successfully added!"
            })
        }catch(error) {
            res.status(400).json(
                error
            )
        }
    }
}