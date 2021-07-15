import { Request, Response } from "express";
import { DeleteEmployeeService } from '../../services/EmployeesServices/DeleteEmployeeService'

class DeleteEmployeeController{
    async handle(request : Request , response : Response){

    const { id } = request.params

    const allEmployeesService = new DeleteEmployeeService()

    await allEmployeesService.execute(Number(id))

    return response.json('Deleted employee')

    }
}


export { DeleteEmployeeController }

