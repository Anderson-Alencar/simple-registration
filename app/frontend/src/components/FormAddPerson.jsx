import React, { useContext, useState } from 'react';
import PersonContext from '../context/PersonContext';
import { requestPost } from '../services/requests';
import { dateForSql } from '../helpers/converters';

export default function FormAddPerson() {
  const [fullName, setFullName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [dateFormatSQL, setDateFormatSQL] = useState();

  const { setIsLoading } = useContext(PersonContext);

  const handleInputDate = ({ target }) => {
    const { value } = target;
    const data = dateForSql(value);
    setDateFormatSQL(data);
  };

  const insertPerson = async () => {
    const body = {
      fullName,
      birthDate: dateFormatSQL,
    };

    setIsLoading(true);
    await requestPost('/peoples', body);
    setIsLoading(false);
    setFullName('');
    setBirthDate('');
  };

  return (
    <form className="container-form">
      <h1 className="title-form">Cadastre uma nova pessoa</h1>
      <div className="inputs-group">
        <label htmlFor="input-name" className="label-control">
          Nome completo
          <input
            type="text"
            className="input-control"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            placeholder="Nome completo"
          />
        </label>
        <label htmlFor="input-date" className="label-control">
          Data de nascimento
          <input
            type="text"
            className="input-control"
            value={birthDate}
            onChange={handleInputDate}
            maxLength={10}
            placeholder="DD/MM/AAAA"
          />
        </label>
      </div>
      <button
        type="button"
        className="button-form"
        onClick={insertPerson}
      >
        ADICIONAR PESSOA
      </button>
    </form>
  );
}
