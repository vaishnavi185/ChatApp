import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List'; // Import the List component

export default function UserList() {
  const [users, setUsers] = useState([]); // State to store the list of users
  const [error, setError] = useState(''); // State to store any errors

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('authToken');
      console.log("Token in UserList:", token);

      const response = await axios.get('http://localhost:9000/user/fetchuser', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response from /fetchuser:", response.data);

      // Temporarily remove filter
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error.response?.data || error.message);
    }
  };

  fetchUsers();
}, []);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Signed-In Users</h1>
      {error && <p className="text-red-500">{error}</p>}
      <List users={users} /> {/* Pass the users as a prop to the List component */}
    </div>
  );
}
