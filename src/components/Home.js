import Navbar from './Navbar';
import '../styles/home.scss';

const Home = () => {
  return (
    <Navbar classObject={{parent: 'list-options', children: 'option'}} />
  );
};

export default Home;