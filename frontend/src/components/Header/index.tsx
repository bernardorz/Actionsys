import { HeaderContainer } from './styles';
import { useTheme } from '../../hooks/useTheme';

export function Header(): JSX.Element {
  const { toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <div className="logo">
        <h1>Actionsys</h1>
      </div>

      <div className="Theme">
        <button type="button" onClick={toggleTheme}>
          Tema
        </button>
      </div>
    </HeaderContainer>
  );
}
