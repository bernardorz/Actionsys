import { Request, Response } from "express";
import { CreateEmployeeService } from '../../services/EmployeesServices/CreateEmployeeService'

class CreateEmployeeController{
    async handle(request : Request , response : Response){

    const date = request.body

    const allEmployeesService = new CreateEmployeeService()

    const employees = await allEmployeesService.execute(date)

    return response.status(201).json(employees)

    }
}


export { CreateEmployeeController }

