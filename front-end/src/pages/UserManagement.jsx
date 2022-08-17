import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import UsersTable from '../components/UsersTable';
import api from '../services/api';

function UserManagement() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then((res) => {
      setAllUsers(res.data);
      setUsers(res.data);
    });
  }, []);

  const handleFilter = ({ query, type }) => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();

      const result = allUsers.filter((user) => user[type]
        .toLowerCase()
        .includes(lowerCaseQuery));

      setUsers(result);
    } else if (!query) {
      setUsers(allUsers);
    }
  };

  return (
    <>
      <h1>Gerenciar Usuários</h1>
      <SearchBar handleFilter={handleFilter} />
      <UsersTable users={users} />
    </>
  );
}

export default UserManagement;
