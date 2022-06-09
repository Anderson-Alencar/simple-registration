import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';
import { requestGet, requestPut } from '../services/requests';
import { dateForSql, sqlForDate } from '../helpers/converters';

export default function FormUpdatePerson({
  hiddenModalUpdate, id,
}) {
  const [newName, setNewName] = useState();
  const [newDate, setNewDate] = useState();
  const [dateFormatSQL, setDateFormatSQL] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await requestGet(`/peoples/${id}`);

      setNewName(data.fullName);
      setDateFormatSQL(data.birthDate);

      const date = sqlForDate(data.birthDate);
      setNewDate(date);
    })();
  }, []);

  const handleInputDate = ({ target }) => {
    const { value } = target;
    const data = dateForSql(value);
    setDateFormatSQL(data);
  };

  const updatePerson = async () => {
    const endpoint = (`/peoples/${id}`);

    await requestPut(endpoint, { fullName: newName, birthDate: dateFormatSQL });
    hiddenModalUpdate();
    window.location.reload(false);
  };

  return (
    <div className="modal-update">
      <div className="modal-update-content">
        <button
          type="button"
          className="close"
          onClick={hiddenModalUpdate}
        >
          &times;
        </button>
        <h4 className="modal-update-title">Atualizar dados dessa pessoa</h4>
        <div className="inputs-update-group">
          <label htmlFor="input-name" className="label-control">
            Nome completo
            <input
              type="text"
              className="input-update"
              value={newName}
              onChange={({ target }) => setNewName(target.value)}
              placeholder="Nome completo"
            />
          </label>
          <label htmlFor="input-date" className="label-control">
            Data de nascimento
            <input
              type="text"
              className="input-update"
              value={newDate}
              onChange={handleInputDate}
              maxLength={10}
              placeholder="DD/MM/AAAA"
            />
          </label>
        </div>
        <div className="modal-buttons">
          <button
            type="button"
            className="btn-update"
            onClick={updatePerson}
          >
            Atualizar
          </button>
          <button
            type="button"
            className="btn-no-remove"
            onClick={hiddenModalUpdate}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

FormUpdatePerson.propTypes = {
  hiddenModalUpdate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
