import { pool, SQLExecute } from "../../database/Connection";
import { CPF } from "../../entities/CPF";
import { CpfRepository } from "../CpfRepository";

export class PostgresCpfRepository implements CpfRepository{
    async save(cpf: CPF): Promise<void> {
        const sqlSave = {
            text: 'INSERT INTO cpf(cpf) VALUES ($1)',
            values: [cpf.cpf]
        }
        try {
            await SQLExecute.query(sqlSave.text, sqlSave.values)
        }catch(err) {
            return err.message;
        }
    }

    async findCpf(cpf: string): Promise<CPF> {
        const sqlFind = {
            text: 'SELECT * FROM cpf WHERE cpf=$1',
            values: [cpf]
        }
        try{
            const { rows } = await SQLExecute.query(sqlFind.text, sqlFind.values)
            return rows[0]
        }catch(err) {
            return err.message;
        }
    }

    async findAll(): Promise<any> {
        const sqlFindAll = {
            text: 'SELECT * FROM cpf'
        }
        const { rows } = await pool.query(sqlFindAll)

        return rows
    }

    async remove(cpf: string): Promise<void> {
        const sqlRemove = {
            text: 'DELETE FROM cpf WHERE cpf=$1',
            values: [cpf]
        }

        try{
            await SQLExecute.query(sqlRemove.text, sqlRemove.values)
        }catch(err) {
            return err.message;
        }
    }
}