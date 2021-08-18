import { AddCpfController } from "../../controller/AddCpfController";
import { CheckCpfController } from "../../controller/CheckCpfController";
import { FindAllCpfController } from "../../controller/FindAllCpfController";
import { RemoveCpfController } from "../../controller/RemoveCpfController";
import { PostgresCpfRepository } from "../../repositories/integration/PostgresCpfRepository";
import { AddCpfUseCase } from "./AddCpfUseCase";
import { CheckCpfUseCase } from "./CheckCpfUseCase";
import { FindAllCpfUseCase } from "./FindAllCpfUseCase";
import { RemoveCpfUseCase } from "./RemoveCpfUseCase";

const postgresCpfRepository = new PostgresCpfRepository();

const addCpfUseCase = new AddCpfUseCase(postgresCpfRepository);
const allCpfUseCase = new FindAllCpfUseCase(postgresCpfRepository);
const checkCpfUseCase = new CheckCpfUseCase(postgresCpfRepository);
const removeCpfUseCase = new RemoveCpfUseCase(postgresCpfRepository);

const addCpfController = new AddCpfController(addCpfUseCase)
const allCpfController = new FindAllCpfController(allCpfUseCase);
const checkCpfController = new CheckCpfController(checkCpfUseCase);
const removeCpfController = new RemoveCpfController(removeCpfUseCase);

export {
    addCpfController,
    allCpfController,
    checkCpfController,
    removeCpfController
}