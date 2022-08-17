import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ handleFilter }) {
  const [query, setQuery] = useState('');
  const [typeOfSearch, setTypeOfSearch] = useState('name');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilter({
      query,
      type: typeOfSearch,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="query">
        Busca
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="query"
          type="text"
          placeholder="Nome, E-mail ou CPF"
        />
      </label>

      <label htmlFor="tipoBusca">
        Buscar por:
        <select
          id="tipoBusca"
          value={typeOfSearch}
          onChange={(e) => setTypeOfSearch(e.target.value)}
        >
          <option value="name">Nome</option>
          <option value="email">E-mail</option>
          <option value="cpf">CPF</option>
        </select>
      </label>

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default SearchBar;
