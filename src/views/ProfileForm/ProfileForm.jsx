// try catch profile in a useEffect
import React from 'react';
import UserForm from '../../components/UserForm/UserForm';

export default function ProfileForm({ isCreating = false }) {
  return (
    <div>
      <UserForm />
    </div>
  );
}
