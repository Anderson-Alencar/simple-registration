import React, { useContext, useEffect, useState } from 'react';
import PersonContext from '../context/PersonContext';
import { requestGet } from '../services/requests';

export default function ListOfPersons() {
  const [persons, setPersons] = useState([]);
  const [age, setAge] = useState([]);

  const { isLoading } = useContext(PersonContext);

  useEffect(() => {
    (async () => {
      const { data } = await requestGet('/peoples');
      setPersons(data);
    })();
  }, [isLoading]);

  useEffect(() => {
    const result = persons.map(({ birthDate }) => {
      const today = new Date();
      const birth = new Date(birthDate);

      let years = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        years -= 1;
      }

      return years;
    });
    setAge(result);
  }, [persons]);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de nascimento</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {
          persons.map(({ id, fullName, birthDate }, index) => {
            const birth = birthDate.split('-');
            const d = birth[2];
            const m = birth[1];
            const y = birth[0];

            return (
              <tr key={id}>
                <td>{ fullName }</td>
                <td>{ `${d}/${m}/${y}` }</td>
                <td>{ age[index] }</td>
              </tr>
            );
          })
        }
      </tbody>
      {
        isLoading && <span>Carregando...</span>
      }
    </table>
  );
}
