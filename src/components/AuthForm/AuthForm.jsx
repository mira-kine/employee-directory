import React from 'react';
import { useForm } from '../../hooks/useForm';
// form will be used for both register and login, depending on
export default function AuthForm({ onSubmit }) {
  const { formState, handleForm, clearForm, setFormError, formError } = useForm(
    {
      email: '',
      password: '',
    }
  );
  const [loading, setLoading] = useState(false);
  // onSubmit is the handleAuth from Auth.js, API call will depend on
  // which type of form it is (sign in or sign up)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    try {
      setFormError('');
      setLoading(true);
      await onSubmit(email, password);
    } catch (e) {
      setFormError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign in or Sign up (change the label)</button>
      </form>
    </>
  );
}
