// try catch profile in a useEffect
import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import { updateProfile, createProfile } from '../../services/profiles';
// view with profile form
export default function ProfileForm({ isCreating = false }) {
  const handleProfile = async (name, email, bio, birthday) => {
    if (isCreating) {
      await createProfile(name, email, bio, birthday);
    } else {
      await updateProfile(name, email, bio, birthday);
    }
  };

  return (
    <div>
      <UserForm />
    </div>
  );
}
