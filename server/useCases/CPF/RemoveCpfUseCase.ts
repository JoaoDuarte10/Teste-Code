import { CpfRepository } from "../../repositories/CpfRepository";
import { verifyCPF } from "../../repositories/VerifyCPF";
import { CpfDTO } from "./CpfDTO";

export class RemoveCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}

    async execute({cpf}: CpfDTO): Promise<void>{
        if(verifyCPF(cpf) == false) throw new Error("CPF is not valid!")

        const cpfAlreadyExist = await this.cpfRepository.find(cpf)
        if(!cpfAlreadyExist) throw new Error("CPF not exists!")

        await this.cpfRepository.remove(cpf)
    }
}