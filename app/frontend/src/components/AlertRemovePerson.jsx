import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';
import { requestDelete } from '../services/requests';

function AlertRemovePerson({ hiddenAlertRemove, id }) {
  const removeContact = async () => {
    const endpoint = (`/peoples/${id}`);
    await requestDelete(endpoint);
    hiddenAlertRemove();
    window.location.reload(false);
  };

  return (
    <div className="modal-body">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          onClick={hiddenAlertRemove}
        >
          &times;
        </button>
        <h4 className="modal-title">Tem certeza que deseja excluir este registro?</h4>
        <p className="modal-subtitle">Após excluir, não será possivel recuperar estas informações.</p>
        <div className="modal-buttons">
          <button
            type="button"
            className="btn-remove"
            onClick={removeContact}
          >
            Excluir
          </button>
          <button
            type="button"
            className="btn-no-remove"
            onClick={hiddenAlertRemove}
          >
            Não excluir
          </button>
        </div>
      </div>
    </div>
  );
}

AlertRemovePerson.propTypes = {
  hiddenAlertRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default AlertRemovePerson;
