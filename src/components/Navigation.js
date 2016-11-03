import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <section className='Navigation'>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </section>
  )
}

export default Navigation;
