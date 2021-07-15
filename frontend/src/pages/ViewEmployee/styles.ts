import styled from 'styled-components';

export const ViewEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EmployeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  section {
    display: flex;
    width: 600px;
    margin: 0 2rem;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
    color: ${props => props.theme.colors.headerColor};

    .employee-info {
      .info {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${props => props.theme.colors.headerColor};
        border-radius: 4px;
        padding: 10px;
      }
    }

    .experience {
      display: flex;
      width: 100%;
    }
  }

  @media (max-width: 580px) {
    section {
      font-size: 86.32%;
      display: flex;
      width: 600px;
      margin: 0 1rem;
      flex-direction: column;
      text-align: center;
      margin-top: 1rem;

      .employee-info {
        .info {
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          border: 1px solid black;
          border-radius: 4px;
          padding: 10px;

          div {
            margin: 10px 0;
          }
        }
      }
    }
  }
`;
