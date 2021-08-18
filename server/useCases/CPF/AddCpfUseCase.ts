import { CPF } from "../../entities/CPF";
import { CpfRepository } from "../../repositories/CpfRepository";
import { validateCPF } from "../../repositories/ValidateCpf";
import { CpfDTO } from "./CpfDTO";

export class AddCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute({cpf}: CpfDTO) {
        if(validateCPF(cpf) == false) throw {
            type: "InvalidCpfException", 
            message: "CPF is not valid."
        }

        const cpfAlreadyExist = await this.cpfRepository.findCpf(cpf)

        if(cpfAlreadyExist) throw {
            type: "ExistsCpfException", 
            message: "CPF already exists."
        }

        const cpfEntitie = new CPF({cpf})

        await this.cpfRepository.save(cpfEntitie)
    }
}