import { NavLink } from 'react-router-dom';
import Button from './Button';
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <div className={styles.container}>
      <NavLink
        exact
        to="/"
        className={styles.navlink}
        activeClassName={styles.active}
      >
        <Button btnName="Home" />
      </NavLink>
      <NavLink
        to="/people"
        className={styles.navlink}
        activeClassName={styles.active}
      >
        <Button btnName="People" />
      </NavLink>
      <NavLink
        to="/elections"
        className={styles.navlink}
        activeClassName={styles.active}
      >
        <Button btnName="Elections" />
      </NavLink>
    </div>
  );
};

export default MainNav;
