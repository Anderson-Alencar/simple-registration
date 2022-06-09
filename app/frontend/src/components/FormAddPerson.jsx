import React, { useContext, useState } from 'react';
import PersonContext from '../context/PersonContext';
import { requestPost } from '../services/requests';

export default function FormAddPerson() {
  const [fullName, setFullName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [dateFormatSQL, setDateFormatSQL] = useState();

  const { setIsLoading } = useContext(PersonContext);

  const handleInputDate = ({ target }) => {
    const { value } = target;

    if (value.length === 10) {
      const splited = value.split('-');
      const order = [splited[2], splited[1], splited[0]];

      const result = order.join('-');

      setDateFormatSQL(result);
    }
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
    <form>
      <h1>Cadastre uma nova pessoa</h1>
      <div>
        <label htmlFor="input-name">
          Nome completo
          <input
            type="text"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            placeholder="Nome completo"
          />
        </label>
        <label htmlFor="input-date">
          Data de nascimento
          <input
            type="text"
            value={birthDate}
            onChange={handleInputDate}
            maxLength={10}
            placeholder="Data de nascimento"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={insertPerson}
      >
        Salvar
      </button>
    </form>
  );
}
