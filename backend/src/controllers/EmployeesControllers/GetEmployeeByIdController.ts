import { Request, Response } from "express";
import { GetEmployeeByIdService } from '../../services/EmployeesServices/GetEmployeeByIdService'

class GetEmployeeByIdController{
    async handle(request : Request , response : Response){

        const { id } = request.params;

        const getEmployeeByIdService = new GetEmployeeByIdService();

        const employee = await getEmployeeByIdService.execute(Number(id))

        return response.json(employee)

    }
}

export { GetEmployeeByIdController }