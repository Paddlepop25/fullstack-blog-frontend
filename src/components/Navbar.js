import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/articles-list'>Articles</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
