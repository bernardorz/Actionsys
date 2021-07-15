import { BiAddToQueue } from 'react-icons/bi';
import { Header } from '../../components/Header';
import { EmployeesTable } from '../../components/EmployeeTable';
import { HomeContainer, NewEmployee } from './styles';
import { useEmployee } from '../../hooks/useEmployee';

export function Home(): JSX.Element {
  const { employees } = useEmployee();
  return (
    <>
      <HomeContainer>
        <Header />
        <NewEmployee to="create/employee">
          <>
            <BiAddToQueue />
            Cadastrar funcionario
          </>
        </NewEmployee>
        <EmployeesTable employees={employees} />
      </HomeContainer>
    </>
  );
}
