// components/Header.tsx
import React from 'react';
import './index.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">ProductLand</div>
      <nav className="header__nav">
        <button className="header__login">Login</button>
        <div className="header__cart">Cart</div>
      </nav>
      {/* <nav>
          <Link href="/">Home</Link>
          <Link href="/api/auth/login">Login</Link>
          <Link href="/api/auth/logout">Logout</Link>
        </nav> */}
    </header>
  );
};

export default Header;
