import { getCustomRepository } from 'typeorm'
import { EmployeesRepository } from '../../repositories/EmployeesRepository'
import AppError from "../../errors" 

class GetEmployeeByIdService{

    async execute(id : number) {

        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employee = await employeesRepository.findOne(id);

        if(!employee){
            throw new AppError("Employee does not exist", 404)
        }

        return employee;
    }
}



export { GetEmployeeByIdService }