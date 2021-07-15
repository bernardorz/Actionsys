import { getCustomRepository } from 'typeorm'
import { EmployeesRepository } from '../../repositories/EmployeesRepository'

interface IEmployee{
    nome : string;
    email : string;
    nascimento : Date;
    admissao : Date;
    setor : "engenharia" | "compras" | "vendas" | "financeiro";
    cargo : "auxiliar" | "técnico" | "engenheiro" | "diretor";
    nivel : "junior" | "pleno" | "senior" | "estagiario"
}

class CreateEmployeeService{
    async execute(date : IEmployee){

        const employeesRepository = getCustomRepository(EmployeesRepository)

        const createEmployee = await employeesRepository.create(date)

        const saveEmployee = employeesRepository.save(createEmployee)

        return saveEmployee
        
    }
}

export { CreateEmployeeService }
