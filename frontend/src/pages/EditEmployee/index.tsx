/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { format, parseISO } from 'date-fns';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { EmployeeContainer } from './styles';
import {
  ICreateEmployee,
  EditEmployee,
  ISubmitEmployee,
} from '../../contexts/EmployeeContext';
import { useEmployee } from '../../hooks/useEmployee';

interface EmployeeParams {
  id: string;
}

export function EmployeeEdit(): JSX.Element {
  const { params } = useRouteMatch<EmployeeParams>();
  const { push } = useHistory();
  // const [employee, setEmployee] = useState<Employees>();
  const [currentEditEmployee, setCurrentEditEmployee] = useState<EditEmployee>(
    {} as EditEmployee,
  );
  const { editEmployee, employees } = useEmployee();

  const validationForm = yup.object().shape({
    nome: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('E-mail obrigatorio').email(),
    data_nascimento: yup
      .date()
      .nullable()
      .typeError('Data de nascimento obrigatoria'),
    data_admissao: yup
      .date()
      .nullable()
      .typeError('Data de admissão obrigatoria'),
  });

  const { register, handleSubmit, reset, formState } = useForm<ICreateEmployee>(
    {
      resolver: yupResolver(validationForm),
    },
  );

  const { errors } = formState;
  const onSubmit = handleSubmit(async (data: ISubmitEmployee) => {
    data.data_admissao = new Date(data.data_admissao).toISOString();

    data.data_nascimento = new Date(data.data_nascimento).toISOString();

    await editEmployee(Number(params.id), data);
    push('/');
  });

  const setValuesForm = async (data: EditEmployee) => {
    const data_nascimento = format(
      parseISO(data.data_nascimento),
      'yyyy-MM-dd',
    );

    const data_admissao = format(parseISO(data.data_admissao), 'yyyy-MM-dd');

    delete data.audit_data_insert;
    delete data.audit_data_update;
    reset({ ...data, data_nascimento, data_admissao });
  };

  useEffect(() => {
    async function getEmployeeById(id: string) {
      const response = await api.get(`/employees/${params.id}`);

      setValuesForm(response.data);
    }

    getEmployeeById(params.id);
  }, [params.id]);

  return (
    <>
      <Header />
      <EmployeeContainer>
        <h1>Editar funcionario</h1>

        <form onSubmit={onSubmit}>
          <Input
            id="nome"
            placeholder="Nome do funcionário"
            {...register('nome')}
            type="text"
            autoComplete="off"
            error={errors.nome?.message || ''}
            label="Nome do funcionário"
          />

          <Input
            id="email"
            placeholder="E-mail do funcionário"
            {...register('email')}
            type="text"
            autoComplete="off"
            error={errors.email?.message || ''}
            label="E-mail do funcionário"
          />

          <Input
            id="data_nascimento"
            placeholder="Data de nascimento do funcionário"
            {...register('data_nascimento')}
            type="date"
            autoComplete="off"
            error={errors.data_nascimento?.message || ''}
            label="Data de nascimento do funcionário"
          />

          <Input
            id="data_admissao"
            placeholder="Data de admissão do funcionário"
            {...register('data_admissao')}
            type="date"
            autoComplete="off"
            error={errors.data_admissao?.message || ''}
            label="Data de admissão do funcionário"
          />
          <label htmlFor="setor"> Setor do funcionário </label>
          <select id="setor" {...register('setor')}>
            <option value="compras">Compras</option>
            <option value="engenharia">Engenharia</option>
            <option value="vendas">Vendas</option>
            <option value="financeiro">Financeiro</option>
          </select>

          <label htmlFor="cargo"> Cargo do funcionário </label>
          <select id="cargo" {...register('cargo')}>
            <option value="auxiliar">Auxiliar</option>
            <option value="técnico">Técnico</option>
            <option value="engenheiro">Engenheiro</option>
            <option value="diretor">Diretor</option>
          </select>

          <label htmlFor="nivel"> nivel do funcionário </label>
          <select id="nivel" {...register('nivel')}>
            <option value="junior">Junior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior</option>
            <option value="estagiario">Estagiario</option>
          </select>

          <input type="submit" value="Salvar" />
        </form>
      </EmployeeContainer>
    </>
  );
}
