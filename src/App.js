import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BoxShadow from './components/BoxShadow';
import TextShadow from './components/TextShadow';

const App = () => {
  return (
    <>
      <h1>CSS GEnerator Tool</h1>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/box-shadow' component={BoxShadow} />
        <Route path='/text-shadow' component={TextShadow} />
      </Switch>
    </>
  );
};

export default App;
