import React from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../context/ProfileProvider';

export default function UserProfile() {
  // UserProfile View
  // i need profile context, renders according to whether profile exists or not
  return (
    <>
      <Link to="/profile/create">Temp create profile Link</Link>
      <Link to="/profile/edit">Temp edit profile Link</Link>
    </>
  );
}
