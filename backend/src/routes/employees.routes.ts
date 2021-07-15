import { Router } from 'express';

import { CreateEmployeeController } from '../controllers/EmployeesControllers/CreateEmployeeController';
import { DeleteEmployeeController } from '../controllers/EmployeesControllers/DeleteEmployeeController';
import { EmployeesController  } from '../controllers/EmployeesControllers/EmployeesController';
import { GetEmployeeByIdController } from '../controllers/EmployeesControllers/GetEmployeeByIdController'
import { UpdateEmployeeController } from '../controllers/EmployeesControllers/UpdateEmployeeController'

const EmployeesRouter = Router();

const createEmployeeController = new CreateEmployeeController();
const deleteEmployeeController = new DeleteEmployeeController();
const employeesController = new EmployeesController();
const getEmployeeByIdController = new GetEmployeeByIdController();
const updateEmployeeController = new UpdateEmployeeController()

EmployeesRouter.get('/', employeesController.handle)

EmployeesRouter.get('/:id', getEmployeeByIdController.handle)

EmployeesRouter.post('/', createEmployeeController.handle);

EmployeesRouter.delete('/:id', deleteEmployeeController.handle);

EmployeesRouter.put('/:id', updateEmployeeController.handle)

export { EmployeesRouter };