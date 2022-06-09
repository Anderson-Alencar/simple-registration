import React from 'react';
import PropTypes from 'prop-types';

export default function RemoveButton({ showAlertRemove, id }) {
  return (
    <button
      type="button"
      className="button-remove"
      onClick={() => showAlertRemove(id)}
    >
      Excluir
    </button>
  );
}

RemoveButton.propTypes = {
  showAlertRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
