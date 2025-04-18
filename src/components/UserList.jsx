import React from 'react';
import UserCard from './UserCard';
import { useAppContext } from '../context/AppContext';

const UserList = () => {
  const { users } = useAppContext();
  
  return (
    <div className="user-list">
      <h3>Users ({users.length})</h3>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList; 