import { CPF } from "../../entities/CPF";
import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class AddCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute(cpf_request: CpfDTO) {
        if(verifyCPF(cpf_request.cpf) == false) throw new Error("CPF is not valid!")

        const cpfAlreadyExist = await this.cpfRepository.find(cpf_request.cpf)

        if(cpfAlreadyExist) throw new Error("CPF already exists!")

        const cpfEntitie = new CPF(cpf_request)

        await this.cpfRepository.save(cpfEntitie)
    }
}