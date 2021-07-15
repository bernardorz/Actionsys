import styled from 'styled-components';

export const CreateEmployeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  margin-top: 1rem;
  color: ${props => props.theme.colors.fontColor};

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    label {
      font-family: 'Roboto', sans-serif;
      width: 100%;
      font-weight: bold;
    }

    input {
      width: 360px;
      padding: 5px 10px;
      transition: opacity 0.5s;
      margin: 0.3rem 0rem;
      border-radius: 4px;

      &::placeholder {
        color: black;
      }

      &[type='submit'] {
        color: ${props => props.theme.colors.background};
        cursor: pointer;
        width: 220px;
        height: 40px;
        border: none;
        background-color: ${props => props.theme.colors.fontColor};
        margin: 5px auto;
      }

      &:hover {
        opacity: 0.6;
      }

      &:focus {
        opacity: 1;
      }
    }

    label {
      margin-top: 12px;
    }

    select {
      padding: 5px 10px;
      width: 360px;
      height: 3rem;
      border-radius: 4px;
      border: 1px solid #cfcfcf;
      -webkit-appearance: none;
      font-size: 16px;
      margin: 7px 0;

      option {
        height: 500px;
      }
    }
  }
`;
