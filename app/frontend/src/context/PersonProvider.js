import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonContext from './PersonContext';

export default function PersonProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    isLoading,
    setIsLoading,
  };

  return (
    <PersonContext.Provider value={contextValue}>
      { children }
    </PersonContext.Provider>
  );
}

PersonProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
