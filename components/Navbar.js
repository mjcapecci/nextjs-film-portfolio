import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-logo'>
        <Link href='/'>
          <h1 onClick>Lance Vlcek</h1>
        </Link>
        <p className='nav-title-tag'>Editor, Director, Writer</p>
      </div>

      <div className='nav-links'>
        <Link href='/' className={'nav-link'}>
          HOME
        </Link>
        <Link href='/bio' className='nav-link'>
          BIO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
