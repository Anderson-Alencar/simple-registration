import React from 'react';
import './App.css';
import FormAddPerson from './components/FormAddPerson';
import ListOfPersons from './components/ListOfPersons';

function App() {
  return (
    <div className="App">
      <FormAddPerson />
      <ListOfPersons />
    </div>
  );
}

export default App;
