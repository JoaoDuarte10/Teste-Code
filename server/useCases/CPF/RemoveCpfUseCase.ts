import { CpfRepository } from "../../repositories/CpfRepository";
import { validateCPF } from "../../repositories/ValidateCpf";
import { CpfDTO } from "./CpfDTO";

export class RemoveCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute({cpf}: CpfDTO): Promise<void>{
        if(validateCPF(cpf) == false) throw  {
            type: "InvalidCpfException", 
            message: "CPF is not valid."
        }

        const cpfAlreadyExist = await this.cpfRepository.findCpf(cpf)
        
        if(!cpfAlreadyExist) throw {
            type: "NotFoundCpfException", 
            message: "Not found CPF."
        }

        await this.cpfRepository.remove(cpf)
    }
}