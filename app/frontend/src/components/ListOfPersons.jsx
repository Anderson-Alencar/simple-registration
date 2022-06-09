import React, { useContext, useEffect, useState } from 'react';
import PersonContext from '../context/PersonContext';
import { requestGet } from '../services/requests';
import AlertRemovePerson from './AlertRemovePerson';
import RemoveButton from './RemoveButton';

export default function ListOfPersons() {
  const [persons, setPersons] = useState([]);
  const [age, setAge] = useState([]);
  const [alertRemove, setAlertRemove] = useState(false);
  const [idPerson, setIdPerson] = useState();

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

  const showAlertRemove = (id) => {
    setAlertRemove(true);
    setIdPerson(id);
  };

  const hiddenAlertRemove = () => {
    setAlertRemove(false);
  };

  return (
    <table className="person-table">
      <thead className="header-table">
        <tr>
          <th>Nome</th>
          <th>Data de nascimento</th>
          <th>Idade</th>
          <th>Opções</th>
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
              <tr key={id} className="row">
                <td className="col">{ fullName }</td>
                <td className="col">{ `${d}/${m}/${y}` }</td>
                <td className="col">{ `${age[index]} anos` }</td>
                <td className="col"><RemoveButton showAlertRemove={showAlertRemove} id={id} /></td>

              </tr>
            );
          })
        }
      </tbody>
      {
        isLoading && <span>Carregando...</span>
      }
      {
        alertRemove && (
          <div className="modal">
            <AlertRemovePerson
              hiddenAlertRemove={hiddenAlertRemove}
              id={idPerson}
            />
          </div>
        )
      }
    </table>
  );
}
