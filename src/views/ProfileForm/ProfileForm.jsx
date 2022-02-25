// try catch profile in a useEffect
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useProfile } from '../../context/ProfileProvider';
import { updateProfile, createProfile } from '../../services/profiles';
// view with profile form
export default function ProfileForm({ isCreating = false }) {
  const { setProfile } = useProfile();
  const history = useHistory();

  const handleProfile = async (name, email, bio, birthday) => {
    try {
      if (isCreating) {
        await createProfile(name, email, bio, birthday);
        <Redirect to="/profile" />;
      } else {
        const resp = await updateProfile(name, email, bio, birthday);
        setProfile({
          name: resp.name,
          email: resp.email,
          bio: resp.bio,
          birthday: resp.birthday,
        });
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      {isCreating ? 'Create a Profile' : 'Edit your profile'}
      <UserForm
        onSubmit={handleProfile}
        isCreating={isCreating}
        label={isCreating ? '' : 'go back'}
      />
    </>
  );
}
