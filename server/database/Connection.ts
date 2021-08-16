import { Pool } from "pg";

const connectionString = process.env.STRING_CONNECTION;

const pool = new Pool({
    connectionString
})

const SQLExecute = {
    query: (text: string, params: any) => pool.query(text, params)
}

export { SQLExecute, pool }