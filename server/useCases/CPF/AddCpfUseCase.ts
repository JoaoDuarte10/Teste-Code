import { CPF } from "../../entities/CPF";
import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class AddCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute(cpf_request: CpfDTO) {
        if(verifyCPF(cpf_request.cpf) == false) throw {type: "InvalidCpfException", message: "CPF not valid!"}

        const cpfAlreadyExist = await this.cpfRepository.find(cpf_request.cpf)

        if(cpfAlreadyExist) throw {type: "ExistsCpfException", message: "CPF already exists!"}

       

        const cpfEntitie = new CPF(cpf_request)

        await this.cpfRepository.save(cpfEntitie)
    }
}