import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function List({ users }) {
  return (
    <div className="flex flex-col gap-y-[10px]">
      {users.map((user) => (
        <div key={user.id} className="w-[500px] h-16 bg-gray-100 p-4 rounded shadow flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
           <button title="Add" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
      ))}
    </div>
  );
}