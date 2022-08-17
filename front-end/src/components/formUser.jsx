import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormUser({ action }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [tel, setTel] = useState('');
  const [birthday, setBirthday] = useState('');

  const createUser = () => {};

  const updateUser = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'create') {
      createUser();
    } else if (action === 'edit') {
      updateUser();
    }
  };

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
    </form>
  );
}

FormUser.propTypes = {
  action: PropTypes.string.isRequired,
};

export default FormUser;
