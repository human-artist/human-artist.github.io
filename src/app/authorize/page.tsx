"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth0 } from '@auth0/auth0-react';

/*

const AuthorizePage: React.FC = () => {
  const router = useRouter();
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const handleAuth = async () => {
      if (!isLoading && !isAuthenticated) {
        try {
          await loginWithRedirect();
        } catch (error) {
          console.error('Authentication failed:', error);
        }
      }
    };

    handleAuth();
  }, [loginWithRedirect, isLoading, isAuthenticated, router]);

  return <div>Redirecting...</div>;
};
*/
const AuthorizePage: React.FC = () => {
  const router = useRouter();
  const { isLoading, isAuthenticated, error } = useAuth0();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard'); // Redirect to dashboard or home page after login
    } else if (!isLoading && error) {
      console.error('Authentication error:', error);
      // Handle authentication error, e.g., display an error message
    }
  }, [isLoading, isAuthenticated, error, router]);

  return <div>Processing authentication...</div>;
};

export default AuthorizePage;
