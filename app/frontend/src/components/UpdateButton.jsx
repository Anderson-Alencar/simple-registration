import React from 'react';
import PropTypes from 'prop-types';

export default function UpdateButton({ showModalUpdate, id }) {
  return (
    <button
      type="button"
      className="button-update"
      onClick={() => showModalUpdate(id)}
    >
      Editar
    </button>
  );
}

UpdateButton.propTypes = {
  showModalUpdate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
