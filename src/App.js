import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BoxShadow from './components/BoxShadow';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/box-shadow' component={BoxShadow} />
      </Switch>
    </main>
  );
}

export default App;
