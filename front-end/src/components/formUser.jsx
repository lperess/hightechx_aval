import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

function FormUser({
  action, setCreating, setChangedUsers, user,
}) {
  const [name, setName] = useState(action === 'create' ? '' : user.name);
  const [email, setEmail] = useState(action === 'create' ? '' : user.email);
  const [cpf, setCpf] = useState(action === 'create' ? '' : user.cpf);
  const [tel, setTel] = useState(action === 'create' ? '' : (user.tel || ''));
  const [birthday, setBirthday] = useState(action === 'create' ? '' : (user.birthday || ''));
  const [reqError, setReqError] = useState('');

  const createUser = async () => {
    const body = {
      user: {
        name, email, cpf, tel, birthday,
      },
    };

    api.post('/users', body)
      .then(() => {
        setName('');
        setEmail('');
        setCpf('');
        setTel('');
        setBirthday('');
        setReqError('');
        setCreating(false);
        setChangedUsers((prev) => prev + 1);
      })
      .catch((e) => {
        setReqError(e.message);
      });
  };

  const updateUser = () => {
    const body = {
      user: {
        name, email, cpf, tel, birthday,
      },
    };

    api.put('/users', body)
      .then(() => {
        setName('');
        setEmail('');
        setCpf('');
        setTel('');
        setBirthday('');
        setReqError('');
        setChangedUsers((prev) => prev + 1);
      })
      .catch((e) => {
        setReqError(e.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'create') {
      createUser();
    } else if (action === 'edit') {
      updateUser();
    }
  };

  const invalidInputs = () => {
    let checks = 0;

    if (name.length >= 3) {
      checks += 1;
    }

    if (email.length >= 5) {
      checks += 1;
    }

    if (cpf.length === 11) {
      checks += 1;
    }

    return !(checks === 3);
  };

  const errorElement = <span>{reqError}</span>;

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="nameInput">
        Nome:
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
        />
      </label>

      <label htmlFor="emailInput">
        E-mail:
        <input
          type="email"
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
        />
      </label>

      <label htmlFor="cpfInput">
        CPF:
        <input
          type="text"
          id="cpfInput"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Apenas números"
        />
      </label>

      <label htmlFor="telInput">
        Número de telefone:
        <input
          type="tel"
          id="telInput"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="Apenas números"
        />
      </label>

      <label htmlFor="birthdayInput">
        Data de nascimento:
        <input
          type="date"
          id="birthdayInput"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="dd/mm/aaaa"
        />
      </label>

      <button
        type="submit"
        disabled={invalidInputs()}
      >
        {action === 'create' ? 'Registrar usuário' : 'Editar usuário'}
      </button>

      {reqError && errorElement}
    </form>
  );
}

FormUser.propTypes = {
  action: PropTypes.string.isRequired,
  setCreating: PropTypes.func.isRequired,
  setChangedUsers: PropTypes.func.isRequired,
  user: PropTypes.shape(),
};

FormUser.defaultProps = {
  user: {},
};

export default FormUser;
