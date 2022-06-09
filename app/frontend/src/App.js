import React from 'react';
import './App.css';
import FormAddPerson from './components/FormAddPerson';
import ListOfPersons from './components/ListOfPersons';
import PersonProvider from './context/PersonProvider';

function App() {
  return (
    <PersonProvider>
      <div className="App">
        <FormAddPerson />
        <ListOfPersons />
      </div>
    </PersonProvider>
  );
}

export default App;
