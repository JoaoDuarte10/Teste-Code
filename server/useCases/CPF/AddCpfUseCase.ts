import { CPF } from "../../entities/CPF";
import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class AddCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute({cpf}: CpfDTO) {
        if(verifyCPF(cpf) == false) throw new Error("InvalidCpfException")

        const cpfAlreadyExist = await this.cpfRepository.find(cpf)

        if(cpfAlreadyExist) throw new Error("ExistsCpfException")

        const cpfEntitie = new CPF(cpf)

        await this.cpfRepository.save(cpfEntitie)
    }
}