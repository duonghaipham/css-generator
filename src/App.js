import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BoxShadow from './components/BoxShadow';
import TextShadow from './components/TextShadow';
import Gradient from './components/Gradient';
import Cursor from './components/Cursor';
import BorderRadius from './components/BorderRadius';
import Transform from './components/Transform';
import ColorConverter from './components/ColorConverter';
import MultipleColumns from './components/MultipleColumns';
import Filter from './components/Filter';

const App = () => {
  return (
    <>
      <h1>CSs Generator Tool</h1>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/box-shadow' component={BoxShadow} />
        <Route path='/text-shadow' component={TextShadow} />
        <Route path='/gradient' component={Gradient} />
        <Route path='/cursor' component={Cursor} />
        <Route path='/border-radius' component={BorderRadius} />
        <Route path='/transform' component={Transform} />
        <Route path='/color-converter' component={ColorConverter} />
        <Route path='/multiple-columns' component={MultipleColumns} />
        <Route path='/filter' component={Filter} />
      </Switch>
    </>
  );
};

export default App;
