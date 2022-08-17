import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ user, setUserSelected }) {
  return (
    <tr>
      <td>{user.id}</td>

      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.cpf}</td>

      <td>
        <button
          type="button"
          onClick={() => setUserSelected(user)}
        >
          Detalhes
        </button>

        <button
          type="button"
          // onClick={() => setUserSelected(user)}
        >
          Editar
        </button>

        <button
          type="button"
          // onClick={() => setUserSelected(user)}
        >
          Excluir
        </button>
      </td>
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
  setUserSelected: PropTypes.func.isRequired,
};

export default TableRow;
