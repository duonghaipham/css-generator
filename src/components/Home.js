import '../styles/home.scss';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>CSS GEnerator Tool</h1>
      <main id='list-options'>
        <Link to='/box-shadow' className='option'>Box Shadow</Link>
        <section className='option'>Text Shadow</section>
        <section className='option'>Gradient</section>
        <section className='option'>CSS Cursor</section>
        <section className='option'>Border</section>
        <section className='option'>Border Radius</section>
        <section className='option'>Transform</section>
        <section className='option'>RGBA & Hex Color</section>
        <section className='option'>Filter</section>
        <section className='option'>Multiple Columns</section>
      </main>
    </>
  );
};

export default Home;