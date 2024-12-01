import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DropdownButton from '../../UI/DropdownButton/DropdownButton'; 
import './NavBar.css';

const Navbar = () => {
  const location = useLocation();

  const options = [
    { label: 'Option 1', href: '#' },
    { label: 'Option 2', href: '#' },
    { label: 'Option 3', href: '#' }
  ];

  return (
    <>
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item" >
          <DropdownButton  title="Опции" options={options} />
        </li>
        <li className={`navbar-item ${location.pathname === '/main' ? 'active' : ''}`}>
          <Link to="/main">Главная</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/other' ? 'active' : ''}`}>
          <Link to="/other">Другая</Link>
        </li>

      </ul>
    </nav>
    </>
  );
}

export default Navbar;
