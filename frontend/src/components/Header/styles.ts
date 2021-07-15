import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  background-color: ${props => props.theme.colors.headerColor};
  color: ${props => props.theme.colors.headerFontColor};

  div button {
    border: none;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.headerColor};
    transition: filter 0.3s;
    padding: 0.7rem 1rem;
    border-radius: 6px;

    &:hover {
      filter: opacity(0.6);
    }
  }
`;
