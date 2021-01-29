import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <nav>
      <div className='nav-logo'>
        <h1>Lance Vlcek</h1>
        <p className='nav-title-tag'>Editor, Director, Writer</p>
      </div>

      <div className='nav-links'>
        <Link
          href='/'
          className={'nav-link'}
          onClick={() => setActiveTab('Home')}
        >
          HOME
        </Link>
        <Link
          href='/bio'
          className='nav-link'
          onClick={() => setActiveTab('Bio')}
        >
          BIO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
