import React from 'react';
import { useForm } from '../../hooks/useForm';

export default function UserForm({ onSubmit }) {
  const { formState, handleForm } = useForm({
    name: '',
    birthday: '',
    bio: '',
    email: '',
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
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
      </form>
    </div>
  );
}
