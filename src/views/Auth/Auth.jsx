import React from 'react';
import { useUser } from '../../context/UserProvider';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useHistory } from 'react-router-dom';
import { signUpUser, signInUser } from '../../services/users';

export default function Auth({ isSigningUp = false }) {
  const { setCurrentUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const resp = await signInUser(email, password);
        setCurrentUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  // depending on whether you are signing up or signing in, render AuthForm
  return (
    <>
      <AuthForm onSubmit={handleAuth} />
    </>
  );
}
