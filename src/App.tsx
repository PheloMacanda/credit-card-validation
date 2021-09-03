import './App.css';
import { Route, Switch } from 'react-router-dom';
import CreditCard from './pages/CreditCard';
import ConfigureCountries from './pages/ConfigureCountries';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={CreditCard} />
        <Route exact path={'/configure'} component={ConfigureCountries} />
      </Switch>
    </div>
  );
}

export default App;
