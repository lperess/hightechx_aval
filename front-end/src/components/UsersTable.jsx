import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

function UsersTable({ users }) {
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
        {users.map((user) => <TableRow key={user.id} user={user} />)}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default UsersTable;
