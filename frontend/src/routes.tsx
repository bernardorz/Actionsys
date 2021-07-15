import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { EmployeeEdit } from './pages/EditEmployee';
import { CreateEmployee } from './pages/CreateEmployee';
import { ViewEmployee } from './pages/ViewEmployee';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/edit/employee/:id" component={EmployeeEdit} />
        <Route path="/create/employee" component={CreateEmployee} />
        <Route path="/view/employee/:id" component={ViewEmployee} />
      </Switch>
    </BrowserRouter>
  );
}
