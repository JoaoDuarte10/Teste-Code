import { CpfRepository } from "../../repositories/CpfRepository";
import { validateCPF } from "../../repositories/ValidateCpf";
import { CpfDTO } from "./CpfDTO";

export class CheckCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async handle({cpf}: CpfDTO){
        if(validateCPF(cpf) == false) throw {
            type: "InvalidCpfException", 
            message: "CPF is not valid."
        }
        
        const findCpf = await this.cpfRepository.findCpf(cpf)

        if(!findCpf)throw {
            type: "NotFoundCpfException", 
            message: "Not found CPF."
        }

        return findCpf;
    }
}