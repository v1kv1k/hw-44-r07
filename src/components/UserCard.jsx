import React from 'react';
import { useAppContext } from '../context/AppContext';

const UserCard = ({ user }) => {
  const { theme } = useAppContext();
  
  return (
    <div className={`user-card theme-${theme}`}>
      <h4>{user.name}</h4>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
    </div>
  );
};

export default UserCard; 