import { pool } from "./Connection";

export class Tables {
    async createTables() {
        const tables = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";

        CREATE TABLE IF NOT EXISTS cpf(
            id_cpf UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            cpf int NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
        `;
        pool.query(tables, (err)=>{
            if(err) console.log(err)
        })
    }
}