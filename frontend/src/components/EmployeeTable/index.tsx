import { EmployeeContainer } from './styles';
import { EmployeeRow } from '../EmployeeRow';
import { Employees } from '../../contexts/EmployeeContext';

interface EmployeeRowProps {
  employees: Employees[];
}

export function EmployeesTable({ employees }: EmployeeRowProps): JSX.Element {
  return (
    <EmployeeContainer>
      <table>
        <thead>
          <tr className="table_header">
            <th>Funcionários</th>
            <th>Posição</th>
            <th>Nível</th>
            <th>Excluir</th>
            <th>Editar</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(employee => (
            <EmployeeRow key={String(employee.id)} employee={employee} />
          ))}
        </tbody>
      </table>
    </EmployeeContainer>
  );
}
