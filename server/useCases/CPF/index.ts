import { AddCpfController } from "../../controller/AddCpfController";
import { CheckCpfController } from "../../controller/CheckCpfController";
import { FindAllCpfController } from "../../controller/FindAllCpfController";
import { PostgresCpfRepository } from "../../repositories/integration/PostgresCpfRepository";
import { AddCpfUseCase } from "./AddCpfUseCase";
import { CheckCpfUseCase } from "./CheckCpfUseCase";
import { FindAllCpfUseCase } from "./FindAllCpfUseCase";

const postgresCpfRepository = new PostgresCpfRepository();

const addCpfUseCase = new AddCpfUseCase(postgresCpfRepository);
const allCpfUseCase = new FindAllCpfUseCase(postgresCpfRepository);
const checkCpfUseCase = new CheckCpfUseCase(postgresCpfRepository);

const addCpfController = new AddCpfController(addCpfUseCase)
const allCpfController = new FindAllCpfController(allCpfUseCase);
const checkCpfController = new CheckCpfController(checkCpfUseCase);

export {
    addCpfUseCase,
    addCpfController,
    allCpfUseCase,
    allCpfController,
    checkCpfUseCase,
    checkCpfController
}