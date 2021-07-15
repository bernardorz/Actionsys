import { Router} from 'express';
import { EmployeesRouter  } from './employees.routes';


const routes = Router();

routes.use('/employees', EmployeesRouter);

export  { routes };