import { GlobalStyles } from './styles/global';
import { Routes } from './routes';

import { ThemeProvider } from './contexts/ThemeContext';
import { EmployeeProvider } from './contexts/EmployeeContext';
import { Light } from './styles/themes';

function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme={Light}>
      <EmployeeProvider>
        <Routes />
      </EmployeeProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
