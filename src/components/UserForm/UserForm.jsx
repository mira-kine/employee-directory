import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useUser } from '../../context/UserProvider';
import { useProfile } from '../../context/ProfileProvider';
import { useHistory } from 'react-router-dom';

export default function UserForm({ onSubmit, isCreating }) {
  const { currentUser } = useUser();
  const { profile } = useProfile();
  const { formState, handleForm, setFormError, formError } = useForm(
    profile
      ? {
          name: profile.name,
          birthday: profile.birthday,
          bio: profile.bio,
          email: profile.email,
        }
      : {
          name: '',
          birthday: '',
          bio: '',
          email: currentUser.email,
        }
  );
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, birthday, bio, email } = formState;
    try {
      await onSubmit({ name, birthday, bio, email });
    } catch (e) {
      setFormError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    history.push('/profile');
  };

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleForm}
          />
          <label>Birthday:</label>
          <input
            type="date"
            name="birthday"
            value={formState.birthday}
            onChange={handleForm}
          />
          <label>Bio:</label>
          <textarea
            type="text"
            className="bio"
            name="bio"
            value={formState.bio}
            onChange={handleForm}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            disabled={true}
            value={formState.email}
            onChange={handleForm}
          />
          <button type="submit">Submit</button>
          {!isCreating && (
            <button onClick={handleBack}>Go back to profile</button>
          )}
        </form>
      )}
    </>
  );
}
