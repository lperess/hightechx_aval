import React from 'react';
import PropTypes from 'prop-types';

function UserDetails({ user, setUserSelected }) {
  return (
    <section>
      <h2>{user.name}</h2>

      <p>Detalhes do usuário</p>

      <p>
        Telefone:
        {' '}
        {user.tel}
      </p>

      <p>
        E-mail:
        {' '}
        {user.email}
      </p>

      <p>
        Aniversário:
        {' '}
        {user.birthday}
      </p>

      <button
        type="button"
        onClick={() => setUserSelected({})}
      >
        X
      </button>
    </section>
  );
}

UserDetails.propTypes = {
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

export default UserDetails;
