import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

interface HomeContaierProps {
  children: React.FC;
}

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NewEmployee = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;

  text-decoration: none;
  color: #fff;

  background-color: #404040;
  padding: 12px;
  bottom: 0;
  right: 0;
  border-radius: 6px;

  margin: 20px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-right: 5px;
  }
`;
