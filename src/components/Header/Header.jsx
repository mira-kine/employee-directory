import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { currentUser } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    history.replace('/');
  };

  return (
    <div>
      <span>You are signed in as {currentUser.email}</span>
      <p>Acme Inc</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
