import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  requiredLabel?: boolean;
  isError?: boolean;
}

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);

  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  & + div {
    margin-top: 1rem;
  }

  margin-bottom: 2px;

  input {
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: black;

    border: 1px solid #cfcfcf;

    padding: 1.25rem 1rem;
    &:focus {
      border: ${props =>
        props.isError ? '1px solid  #b40932' : '1px solid #09B41A'};
    }

    ::placeholder {
      color: black;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.25rem;
      opacity: 1;
    }
  }

  ${props =>
    props.isError &&
    css`
      input {
        /* border: 1px solid var(--attention-indication); */
      }
    `};
`;

export const ErrorContainer = styled.div`
  display: flex;

  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #b40932;
    animation: ${slide} 1s ease-out;
  }
`;

export const Error = styled.div`
  color: #b40932;
  font-size: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1rem;

  animation: ${slide} 0.8s ease-out;
`;

export const TextLabel = styled.p`
  font-weight: bold;
  line-height: 1rem;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.fontColor};
`;

export const TextLabelOptional = styled.p`
  font-style: 'Roboto', sans-serif;
  font-weight: lighter;

  color: #a7a7a7;
`;

export const ContainerLabel = styled.div`
  display: flex;

  margin-top: 0px;

  border: none;
`;
