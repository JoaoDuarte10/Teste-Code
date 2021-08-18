import { Request, Response } from "express";
import { RemoveCpfUseCase } from "../useCases/CPF/RemoveCpfUseCase";

export class RemoveCpfController {
    constructor(
        private removeCpfUseCase: RemoveCpfUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { cpf } = req.params;

        try {
            await this.removeCpfUseCase.execute({cpf})
            return res.status(200).json({
                message: "CPF removed successfully"
            })
        } catch (error) {
            res.status(400).json(
                error
            )
        }
    }
}