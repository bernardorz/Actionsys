import { Request, Response } from "express";
import {UpdateEmployeeService  } from '../../services/EmployeesServices/UpdateEmployeeService'



class UpdateEmployeeController{
    async handle(request : Request , response : Response){

       const { id } = request.params;
       const body = request.body

       const updateEmployeeService = new UpdateEmployeeService();

       const updateEmployee = await updateEmployeeService.execute(Number(id), body) 

       return response.json(updateEmployee)

    }
}

export { UpdateEmployeeController }