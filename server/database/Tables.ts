import { pool } from "./Connection";

export class Tables {
    async createTables() {
        const tables = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";

        CREATE TABLE IF NOT EXISTS cpf(
            cpf varchar(11) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
        `;
        pool.query(tables, (err)=>{
            if(err) console.log(err)
        })
    }
}