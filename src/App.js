import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BoxShadow from './components/BoxShadow';

const App = () => {
  return (
    <>
      <h1>CSS GEnerator Tool</h1>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/box-shadow' component={BoxShadow} />
      </Switch>
    </>
  );
}

export default App;
