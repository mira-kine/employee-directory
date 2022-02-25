import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../context/ProfileProvider';

export default function UserProfile() {
  const { profile, loading } = useProfile();
  console.log('profile', profile);
  // UserProfile View
  // i need profile context, renders according to whether profile exists or not
  return (
    <>
      {loading && <p>Loading</p>}
      <Link to="/profile/create">Temp create profile Link</Link>
      <Link to="/profile/edit">Temp edit profile Link</Link>
      <p>Name: {profile.name}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </>
  );
}
