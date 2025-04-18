import React from 'react';
import UserList from './UserList';

const UserSection = () => {
  return (
    <div className="user-section">
      <h2>User Management</h2>
      <p>This section shows users from the global context</p>
      <UserList />
    </div>
  );
};

export default UserSection; 