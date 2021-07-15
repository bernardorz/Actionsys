import { Link } from 'react-router-dom';
import { IoArrowBack, IoTrashSharp } from 'react-icons/io5';
import { MdCreate } from 'react-icons/md';
import { Row } from './styles';
import { Employees } from '../../contexts/EmployeeContext';
import { useEmployee } from '../../hooks/useEmployee';

interface EmployeeRowProps {
  employee: Employees;
}

export function EmployeeRow({ employee }: EmployeeRowProps): JSX.Element {
  const { deleteEmployee } = useEmployee();
  return (
    <Row>
      <td>
        <div className="employee_info">
          <span className="employee_name">
            <Link to={`/view/employee/${employee.id}`}>
              {employee.nome}
              <IoArrowBack size={18} />
            </Link>
          </span>
        </div>
      </td>
      <td>{employee.cargo}</td>
      <td>{employee.nivel}</td>
      <td>
        <button
          type="button"
          className="excluir"
          onClick={() => {
            deleteEmployee(employee.id);
          }}
        >
          <IoTrashSharp size={22} />
        </button>
      </td>
      <td>
        <Link to={`/edit/employee/${employee.id}`}>
          <MdCreate size={18} />
        </Link>
      </td>
    </Row>
  );
}
