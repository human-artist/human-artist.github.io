// src/components/organisms/LogoutButton/index.tsx
"use client";

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout();
    if (typeof window !== 'undefined') {
      window.location.href = window.location.origin;
    }
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
