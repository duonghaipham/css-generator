import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BoxShadow from './components/BoxShadow';
import TextShadow from './components/TextShadow';
import Cursor from './components/Cursor';

const App = () => {
  return (
    <>
      <h1>CSS GEnerator Tool</h1>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/box-shadow' component={BoxShadow} />
        <Route path='/text-shadow' component={TextShadow} />
        <Route path='/cursor' component={Cursor} />
      </Switch>
    </>
  );
};

export default App;
