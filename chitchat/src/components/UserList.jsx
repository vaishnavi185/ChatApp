import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function UserList({ onUserAdd }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:9000/user/fetchuser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleAddClick = (user) => {
    if (onUserAdd) onUserAdd(user);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ADD USERS</h1>
      {error && <p className="text-red-500">{error}</p>}
      {users.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2"
        >
          <div>
            <p className="text-lg font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <button onClick={() => handleAddClick(user)} title="Add User">
            <FontAwesomeIcon icon={faPlus} className="text-blue-500" />
          </button>
        </div>
      ))}
    </div>
  );
}
