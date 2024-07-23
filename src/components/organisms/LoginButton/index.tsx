// src/components/organisms/LoginButton.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
  const { loginWithPopup } = useAuth0();
  const handleLogin = async () => {
    try {
      await loginWithPopup();
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
