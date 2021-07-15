import { getCustomRepository } from 'typeorm'
import { EmployeesRepository } from '../../repositories/EmployeesRepository';
import AppError from "../../errors";

interface IData{
    nome? : string;
    email? : string;
    setor? : "engenharia" | "compras" | "vendas" | "financeiro";
    cargo? : "auxiliar" | "técnico" | "engenheiro" | "diretor";
    nivel? : "junior" | "pleno" | "senior" | "estagiario";
    data_nascimento?: Date;
    data_admissao?: Date;
}

class UpdateEmployeeService{
    async execute(id : number , data : IData){
        
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employee = await employeesRepository.findOne(id);

        if(!employee){
            throw new AppError("Employee does not exist", 404)
        }

        const currentEmployee = {...employee, ...data}

        const newEmployee = await employeesRepository.save(currentEmployee)
       
        return newEmployee
            
    }
}

export { UpdateEmployeeService }