import { createContext, ReactNode, useState, useEffect } from 'react';

import api from '../services/api';
/* eslint-disable camelcase */
export interface Employees {
  id: number;
  nome: string;
  email: string;
  data_nascimento: Date;
  data_admissao: Date;
  setor: string;
  cargo: string;
  nivel: string;
  audit_data_insert?: Date;
  audit_data_update?: Date;
}

export interface ICreateEmployee {
  nome: string;
  email: string;
  data_nascimento: Date;
  data_admissao: Date;
  setor: string;
  cargo: string;
  nivel: string;
}

export interface EditEmployee {
  id?: number;
  nome: string;
  email: string;
  data_nascimento: string;
  data_admissao: string;
  setor: string;
  cargo: string;
  nivel: string;
  audit_data_insert?: Date;
  audit_data_update?: Date;
}

export interface DataEmployees {
  data: EditEmployee;
}

export interface ISubmitEmployee {
  cargo: string;
  data_admissao: string;
  data_nascimento: string;
  email: string;
  nivel: string;
  nome: string;
  setor: string;
}

interface EmployeeProviderData {
  children: ReactNode;
}

export interface EmployeeContextData {
  employees: Employees[];
  deleteEmployee: (id: number) => Promise<void>;
  createEmploy: (data: ICreateEmployee) => Promise<void>;
  editEmployee: (id: number, data: EditEmployee) => Promise<void>;
}

export const EmployeeContext = createContext({} as EmployeeContextData);

export function EmployeeProvider({
  children,
}: EmployeeProviderData): JSX.Element {
  const [employees, setEmployees] = useState<Employees[]>([]);

  useEffect(() => {
    async function getEmployees() {
      const { data } = await api.get<Employees[]>('/employees');
      setEmployees(data);
    }

    getEmployees();
  }, []);

  const createEmploy = async (data: ICreateEmployee) => {
    const response = await api.post('/employees/', data);

    setEmployees(previousEmployees => [...previousEmployees, response.data]);
  };

  const deleteEmployee = async (id: number) => {
    await api.delete(`/employees/${id}`);

    setEmployees(previousEmployees =>
      previousEmployees.filter(employee => employee.id !== Number(id)),
    );
  };

  const editEmployee = async (id: number, data: EditEmployee) => {
    await api.put(`/employees/${id}`, data);
    const resposne = await api.get<Employees[]>('/employees');
    setEmployees(resposne.data);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        deleteEmployee,
        createEmploy,
        editEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
