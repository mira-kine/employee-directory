import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../../context/ProfileProvider';
import { useUser } from '../../context/UserProvider';

export default function UserProfile() {
  const { profile, loading } = useProfile();
  const { user } = useUser();
  const history = useHistory();
  // UserProfile View
  // i need profile context, renders according to whether profile exists or not
  const userProfile = (
    <div>
      <p>Name: {profile.name}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );

  const handleClick = () => {
    history.push('/profile/edit');
  };
  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && profile ? userProfile : <Redirect to="/profile/create" />}
      <button onClick={handleClick}>Edit your profile</button>
    </>
  );
}
