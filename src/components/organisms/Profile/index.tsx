// src/pages/profile.tsx
"use client";

import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated || !user) {
    return <div>Loading...</div>; // or handle unauthenticated state
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;
export const getServerSideProps = withPageAuthRequired();
