import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

function UsersTable({ users, setUserSelected }) {
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
          />
        ))}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setUserSelected: PropTypes.func.isRequired,
};

export default UsersTable;
