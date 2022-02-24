import React from 'react';
import { useForm } from '../../hooks/useForm';
// form will be used for both register and login, depending on
export default function AuthForm({ onSubmit }) {
  const { formState, handleForm, clearForm } = useForm({
    email: '',
    password: '',
  });

  // onSubmit is the handleAuth from Auth.js, API call will depend on
  // which type of form it is (sign in or sign up)
  return (
    <>
      <form>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleForm}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleForm}
        />
      </form>
    </>
  );
}
