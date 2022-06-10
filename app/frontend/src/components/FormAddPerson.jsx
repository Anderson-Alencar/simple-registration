import React, { useContext, useEffect, useState } from 'react';
import PersonContext from '../context/PersonContext';
import { requestPost } from '../services/requests';
import { dateForSql } from '../helpers/converters';

export default function FormAddPerson() {
  const [fullName, setFullName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [dateFormatSQL, setDateFormatSQL] = useState();
  const [error, setError] = useState();

  const { setIsLoading } = useContext(PersonContext);

  useEffect(() => {
    if (birthDate && birthDate.length === 10) {
      const data = dateForSql(birthDate);
      setDateFormatSQL(data);
    }
  }, [birthDate]);

  const insertPerson = async () => {
    const body = {
      fullName,
      birthDate: dateFormatSQL,
    };
    try {
      setIsLoading(true);
      await requestPost('/peoples', body);
      setIsLoading(false);
      setFullName('');
      setBirthDate('');
      setError('');
    } catch (err) {
      setError(err.response.data);
      setIsLoading(false);
    }
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
          { error && error.includes('Nome') && <p className="msg-erro">{ error }</p> }
        </label>
        <label htmlFor="input-date" className="label-control">
          Data de nascimento
          <input
            type="text"
            className="input-control"
            value={birthDate}
            onChange={({ target }) => setBirthDate(target.value)}
            maxLength={10}
            placeholder="DD/MM/AAAA"
          />
          { error && error.includes('Data') && <p className="msg-erro">{ error }</p> }
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
