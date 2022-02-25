import React from 'react';

export default function UserForm() {
  const { profile } = useProfile();
  return (
    <div>
      <form>
        <input type="text" value={name}></input>
      </form>
      >
    </div>
  );
}
