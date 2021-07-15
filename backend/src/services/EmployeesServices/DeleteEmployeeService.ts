import { getCustomRepository, ObjectID } from 'typeorm'
import { EmployeesRepository } from '../../repositories/EmployeesRepository'
import AppError from "../../errors" 

class DeleteEmployeeService{

    async execute(id : number) : Promise<void> {

        if(!id){
            throw new AppError("You didn't pass the employee id", 400);
        }

        const employeesRepository = getCustomRepository(EmployeesRepository);


        const employeed = employeesRepository.findOne(id);

        if(!employeed){
                throw new AppError("Employee does not exist", 400);
        }

        await employeesRepository.delete({ id })
        
        return 
    }
}



export { DeleteEmployeeService }