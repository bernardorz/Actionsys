/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formatISO, parseISO } from 'date-fns';
import { Header } from '../../components/Header';
import { CreateEmployeeContainer } from './styles';
import { useEmployee } from '../../hooks/useEmployee';
import { ICreateEmployee } from '../../contexts/EmployeeContext';
import { Input } from '../../components/Input';

export function CreateEmployee(): JSX.Element {
  const { createEmploy } = useEmployee();
  const { push } = useHistory();

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

  const { register, handleSubmit, formState } = useForm<ICreateEmployee>({
    resolver: yupResolver(validationForm),
  });

  const { errors } = formState;

  const onSubmit = handleSubmit(async data => {
    const data_nascimento = parseISO(formatISO(data.data_nascimento));

    const data_admissao = parseISO(formatISO(data.data_admissao));

    await createEmploy({ ...data, data_admissao, data_nascimento });
    push('/');
  });

  return (
    <>
      <Header />
      <CreateEmployeeContainer>
        <h1>Criar funcionario </h1>

        <form onSubmit={onSubmit}>
          <Input
            id="nome"
            placeholder="Nome"
            {...register('nome')}
            type="text"
            autoComplete="off"
            error={errors.nome?.message || ''}
            label="Nome do funcionário"
          />

          <Input
            id="email"
            placeholder="Email"
            {...register('email')}
            type="text"
            autoComplete="off"
            error={errors.email?.message || ''}
            label="E-mail do funcionário "
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

          <input type="submit" value="Enviar" />
        </form>
      </CreateEmployeeContainer>
    </>
  );
}
