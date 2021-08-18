import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class RemoveCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute({cpf}: CpfDTO): Promise<void>{
        if(verifyCPF(cpf) == false) throw  {
            type: "InvalidCpfException", 
            message: "CPF not valid!"
        }

        const cpfAlreadyExist = await this.cpfRepository.find(cpf)
        
        if(!cpfAlreadyExist) throw {
            type: "ExistsCpfException", 
            message: "CPF already exists!"
        }

        await this.cpfRepository.remove(cpf)
    }
}