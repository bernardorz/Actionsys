import { Request, Response } from "express";
import { EmployeesServices } from '../../services/EmployeesServices/EmployeesServices'

class EmployeesController{
    async handle(request : Request , response : Response){

    const allEmployeesService = new EmployeesServices()

    const employees =  await allEmployeesService.execute()

    return response.json(employees)

    }
}


export { EmployeesController }

