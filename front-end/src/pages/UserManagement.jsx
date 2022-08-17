import React, { useEffect, useState } from 'react';
import FormUser from '../components/FormUser';
import SearchBar from '../components/SearchBar';
import UserDetails from '../components/UserDetails';
import UsersTable from '../components/UsersTable';
import api from '../services/api';

function UserManagement() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({});
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingID, setEditingID] = useState(0);
  const [changedUsers, setChangedUsers] = useState(0);

  useEffect(() => {
    api.get('/users').then((res) => {
      setAllUsers(res.data);
      setUsers(res.data);
    });
  }, [changedUsers]);

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

  const handleCreateBtn = () => {
    setCreating(!creating);
    setEditing(false);
    setUserSelected({});
  };

  return (
    <>
      <h1>Gerenciar Usuários</h1>

      <button
        type="button"
        onClick={handleCreateBtn}
      >
        Criar usuário
      </button>

      <SearchBar handleFilter={handleFilter} />

      <UsersTable
        users={users}
        setUserSelected={setUserSelected}
        setCreating={setCreating}
        setEditing={setEditing}
        setEditingID={setEditingID}
      />

      {creating && (
      <FormUser
        action="create"
        setCreating={setCreating}
        setChangedUsers={setChangedUsers}
      />
      )}

      {editing && (
      <FormUser
        action="edit"
        setCreating={setCreating}
        setChangedUsers={setChangedUsers}
        user={allUsers.find((user) => user.id === editingID)}
      />
      )}

      {userSelected.id && (
      <UserDetails
        user={userSelected}
        setUserSelected={setUserSelected}
      />
      )}
    </>
  );
}

export default UserManagement;
