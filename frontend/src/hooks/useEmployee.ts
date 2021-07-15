import { useContext } from 'react';

import {
  EmployeeContext,
  EmployeeContextData,
} from '../contexts/EmployeeContext';

export function useEmployee(): EmployeeContextData {
  const value = useContext(EmployeeContext);
  return value;
}
