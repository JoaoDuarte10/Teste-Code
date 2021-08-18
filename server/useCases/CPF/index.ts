import { AddCpfController } from "../../controller/AddCpfController";
import { FindAllCpfController } from "../../controller/FindAllCpfController";
import { PostgresCpfRepository } from "../../repositories/integration/PostgresCpfRepository";
import { AddCpfUseCase } from "./AddCpfUseCase";
import { FindAllCpfUseCase } from "./FindAllCpfUseCase";

const postgresCpfRepository = new PostgresCpfRepository();

const addCpfUseCase = new AddCpfUseCase(postgresCpfRepository);
const allCpfUseCase = new FindAllCpfUseCase(postgresCpfRepository);

const addCpfController = new AddCpfController(addCpfUseCase)
const allCpfController = new FindAllCpfController(allCpfUseCase);

export {
    addCpfUseCase,
    addCpfController,
    allCpfUseCase,
    allCpfController
}