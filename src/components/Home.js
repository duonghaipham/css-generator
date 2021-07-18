import '../styles/home.scss';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <main id='list-options'>
      <Link to='/box-shadow' className='option'>Box Shadow</Link>
      <Link to='/text-shadow' className='option'>Text Shadow</Link>
      <section className='option'>Gradient</section>
      <Link to='/cursor' className='option'>CSS Cursor</Link>
      <section className='option'>Border</section>
      <Link to='/border-radius' className='option'>Border Radius</Link>
      <Link to='/transform' className='option'>Transform</Link>
      <section className='option'>RGBA & Hex Color</section>
      <Link to='/filter' className='option'>Filter</Link>
      <section className='option'>Multiple Columns</section>
    </main>
  );
};

export default Home;