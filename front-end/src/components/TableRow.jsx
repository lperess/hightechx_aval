import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ user }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.cpf}</td>
      <td>Ações</td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.shape({
    birthday: PropTypes.string,
    cpf: PropTypes.string,
    createdAt: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    tel: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default TableRow;
