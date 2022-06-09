import React from 'react';
import FormAddPerson from './components/FormAddPerson';
import ListOfPersons from './components/ListOfPersons';
import PersonProvider from './context/PersonProvider';
import './styles/App.css';

function App() {
  return (
    <PersonProvider>
      <div className="container">
        <FormAddPerson />
        <ListOfPersons />
      </div>
    </PersonProvider>
  );
}

export default App;
