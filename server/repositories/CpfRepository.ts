import { CPF } from "../entities/CPF";

export interface CpfRepository {
    save(cpf: CPF): Promise<CPF>
    find(cpf: string): Promise<CPF>
    findAll(): Promise<CPF>
    remove(cpf: string): Promise<void>
}