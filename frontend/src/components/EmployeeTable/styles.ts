import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 0 20px;

  table {
    width: 100%;
    margin-top: 2rem;
    color: ${props => props.theme.colors.fontColor};
    border: 1px solid;
    border-radius: 6px;

    border-collapse: collapse;

    tr {
      th,
      td {
        text-align: center;
        padding: 5px;
      }

      th {
        margin-left: 10px;
      }
    }
  }
`;
