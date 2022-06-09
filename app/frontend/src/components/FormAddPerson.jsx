import React from 'react';

export default function FormAddPerson() {
  return (
    <form>
      <h1>Cadastre uma nova pessoa</h1>
      <div>
        <label htmlFor="input-name">
          Nome completo
          <input type="text" placeholder="Nome completo" />
        </label>
        <label htmlFor="input-date">
          Data de nascimento
          <input type="text" placeholder="Data de nascimento" />
        </label>
      </div>
      <button type="button">Salvar</button>
    </form>
  );
}
