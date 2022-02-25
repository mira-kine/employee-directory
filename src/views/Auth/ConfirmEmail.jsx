import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmEmail() {
  return (
    <div>
      <h2>Check your inbox for a confirmation email</h2>
      <Link to="/login">Go back to sign in</Link>
    </div>
  );
}
