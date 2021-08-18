import { CpfRepository } from "../../repositories/CpfRepository";

export class FindAllCpfUseCase {
    constructor(
        private cpfRepository: CpfRepository
    ){}
    
    async execute(){
        return await this.cpfRepository.findAll()
    }
}