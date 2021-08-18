import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class CheckCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async handle({cpf}: CpfDTO){
        if(verifyCPF(cpf) == false) throw new Error("CPF is not valid!")
        return await this.cpfRepository.find(cpf)
    }
}