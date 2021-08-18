import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class CheckCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async handle({cpf}: CpfDTO){
        if(verifyCPF(cpf) == false) throw {
            type: "InvalidCpfException", 
            message: "CPF not valid!"
        }
        
        const findCpf = await this.cpfRepository.find(cpf)

        if(!findCpf)throw {
            type: "NotFoundCpfException", 
            message: "CPF not found."
        }

        return findCpf;
    }
}