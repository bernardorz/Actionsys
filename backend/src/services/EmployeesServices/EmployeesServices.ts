import { getCustomRepository, ObjectID } from 'typeorm'
import { EmployeesRepository } from '../../repositories/EmployeesRepository'
import AppError from "../../errors" 

class EmployeesServices{

    async execute() {

        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employees = await employeesRepository.find();

        return employees
    }
}



export { EmployeesServices }