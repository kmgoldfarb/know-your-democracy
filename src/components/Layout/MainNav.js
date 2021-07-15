import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/people">People</NavLink>
      </li>
      <li>
        <NavLink to="/elections">Elections</NavLink>
      </li>
    </ul>
  );
};

export default MainNav;
