import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  // i need profile context, renders according to whether profile exists or not
  return (
    <>
      This is where user information will go
      <Link to="/profile/create">Temp create profile Link</Link>
      <Link to="/profile/edit">Temp edit profile Link</Link>
    </>
  );
}
