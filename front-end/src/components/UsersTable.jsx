import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

function UsersTable({
  users, setUserSelected, setCreating, setEditing, setEditingID,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>CPF</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            user={user}
            setUserSelected={setUserSelected}
            setCreating={setCreating}
            setEditing={setEditing}
            setEditingID={setEditingID}
          />
        ))}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setUserSelected: PropTypes.func.isRequired,
  setCreating: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired,
  setEditingID: PropTypes.func.isRequired,
};

export default UsersTable;
