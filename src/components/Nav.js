import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <div className='logo'>
          <NavLink exact to='/'>
            <p>TUTURUDUTU</p>
          </NavLink>
        </div>
        <div className='items'>
          <NavLink exact to='/dashboard'>
            <p>Dashboard</p>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
