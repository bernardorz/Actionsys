import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { format } from 'date-fns';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { EditEmployee } from '../../contexts/EmployeeContext';
import { ViewEmployeeContainer, EmployeeContainer } from './styles';

interface EmployeeParams {
  id: string;
}

export function ViewEmployee(): JSX.Element {
  const { params } = useRouteMatch<EmployeeParams>();
  const [employee, setEmployee] = useState<EditEmployee>({} as EditEmployee);

  const formatDate = (date: Date): string => {
    return String(format(date, 'dd-MM-yyyy'));
  };

  const formatDateEmployee = (data: EditEmployee): EditEmployee => {
    const data_nascimento = formatDate(new Date(data.data_nascimento));

    const data_admissao = formatDate(new Date(data.data_admissao));

    return { ...data, data_nascimento, data_admissao };
  };

  const getEmployeeById = async (id: string) => {
    const response = await api.get(`/employees/${params.id}`);
    setEmployee(formatDateEmployee(response.data));
  };

  useEffect(() => {
    getEmployeeById(params.id);
  }, [params.id]);

  return (
    <>
      <ViewEmployeeContainer>
        <Header />
        <EmployeeContainer>
          <section>
            <h1>Informações do funcionário </h1>
            <div className="employee-info">
              <div className="info">
                <div className="name"> Nome : {employee.nome}</div>
                <div className="nascimento">Email : {employee.email}</div>
              </div>

              <div className="info">
                <div className="birthDate">
                  Data de nascimento : {employee.data_nascimento}
                </div>
                <div className="date">
                  Data de admissão : {employee.data_admissao}{' '}
                </div>
              </div>

              <div className="info">
                <div className="sector"> Setor : Financeiro</div>
                <div className="office"> Cargo: Auxiliar</div>
              </div>
              <div className="info">
                <div className="sector"> Nível : Junior</div>
                <div className="office">
                  Numero de indentificação : {employee.id}
                </div>
              </div>
            </div>
          </section>
        </EmployeeContainer>
      </ViewEmployeeContainer>
    </>
  );
}
