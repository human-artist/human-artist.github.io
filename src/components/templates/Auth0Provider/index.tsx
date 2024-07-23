// src/components/providers/Auth0Provider.tsx
"use client";

import React, {useState, useEffect} from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';

const Auth0ProviderWithHistory: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  
  const onRedirectCallback = (appState: any) => {
    router.push(appState?.returnTo || '/');
  };

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: typeof window !== "undefined" ? window.location.origin : 'http://localhost:3000/authorize/',
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
