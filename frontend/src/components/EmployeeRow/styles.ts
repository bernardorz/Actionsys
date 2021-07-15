import styled from 'styled-components';

export const Row = styled.tr`
  border: 1px solid ${props => props.theme.colors.fontColor};

  .employee_info {
    span {
      position: relative;

      svg {
        position: absolute;
      }
    }
  }

  td {
    padding: 0;
    margin: 0;
    border: none;

    button {
      color: ${props => props.theme.colors.fontColor};
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.fontColor};
    }
  }

  .excluir {
    border: none;
    background: transparent;
    outline: none;
    svg {
      position: relative;
      cursor: pointer;
    }
  }
`;
