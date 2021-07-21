import {NavLink} from "react-router-dom";

const Navbar = props => {
  return (
    <main className={props.classObject.parent}>
      <NavLink activeClassName='active-menu' to='/box-shadow' className={props.classObject.children}>Box Shadow</NavLink>
      <NavLink activeClassName='active-menu' to='/text-shadow' className={props.classObject.children}>Text Shadow</NavLink>
      <NavLink activeClassName='active-menu' to='/gradient' className={props.classObject.children}>Gradient</NavLink>
      <NavLink activeClassName='active-menu' to='/cursor' className={props.classObject.children}>CSS Cursor</NavLink>
      <NavLink activeClassName='active-menu' to='/border-radius' className={props.classObject.children}>Border Radius</NavLink>
      <NavLink activeClassName='active-menu' to='/transform' className={props.classObject.children}>Transform</NavLink>
      <NavLink activeClassName='active-menu' to='/color-converter' className={props.classObject.children}>RGBA & Hex Color</NavLink>
      <NavLink activeClassName='active-menu' to='/filter' className={props.classObject.children}>Filter</NavLink>
      <NavLink activeClassName='active-menu' to='/multiple-columns' className={props.classObject.children}>Multiple Columns</NavLink>
    </main>
  );
};

export default Navbar;