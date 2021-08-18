import express from 'express'
import { Tables } from './database/Tables';
import { router } from './routes';

const app = express();
const tables = new Tables();

async function executeTable() {
    await tables.createTables();
}
executeTable();

app.use(express.json());
app.use(router)

export { app }