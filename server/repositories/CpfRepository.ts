import { CPF } from "../entities/CPF";

export interface CpfRepository {
    save(cpf: CPF): Promise<void>;
    findCpf(cpf: string): Promise<any>;
    findAll(): Promise<any>;
    remove(cpf: string): Promise<void>;
}