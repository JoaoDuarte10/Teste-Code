import express from 'express'
import { Tables } from './database/Tables';
import { router } from './routes';

const app = express();
const tables = new Tables();

tables.createTables();

app.use(express.json());
app.use(router)

export { app }