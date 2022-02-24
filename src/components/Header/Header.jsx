import React from 'react';
import { useUser } from '../../context/UserProvider';

export default function Header() {
  const { currentUser } = useUser();
  return (
    <div>
      <span>You are signed in as {currentUser.email}</span>
      <p>Acme Inc</p>
      <button>Sign out</button>
    </div>
  );
}
