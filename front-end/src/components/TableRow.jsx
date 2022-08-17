import React from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

function TableRow({
  user, setUserSelected, setCreating, setEditing, setEditingID, setChangedUsers,
}) {
  const handleEditBtn = () => {
    setEditing((prev) => !prev);
    setEditingID(user.id);
    setCreating(false);
  };

  const handleDeleteBtn = () => {
    api.delete(`/users/${user.id}`).then(() => {
      setChangedUsers((prev) => prev + 1);
    });
  };

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
          onClick={handleEditBtn}
        >
          Editar
        </button>

        <button
          type="button"
          onClick={handleDeleteBtn}
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
  setCreating: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired,
  setEditingID: PropTypes.func.isRequired,
  setChangedUsers: PropTypes.func.isRequired,
};

export default TableRow;
