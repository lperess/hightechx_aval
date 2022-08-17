import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

function FormUser({ action, setCreating }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [tel, setTel] = useState('');
  const [birthday, setBirthday] = useState('');
  const [createError, setCreateError] = useState('');

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
        setCreateError('');
        setCreating(false);
      })
      .catch((e) => {
        setCreateError(e.message);
      });
  };

  const updateUser = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'create') {
      createUser();
    } else if (action === 'edit') {
      updateUser();
    }
  };

  const createErrorElement = <span>{createError}</span>;

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
      >
        {action === 'create' ? 'Registrar usuário' : 'Editar usuário'}
      </button>

      {createError && createErrorElement}
    </form>
  );
}

FormUser.propTypes = {
  action: PropTypes.string.isRequired,
  setCreating: PropTypes.func.isRequired,
};

export default FormUser;
