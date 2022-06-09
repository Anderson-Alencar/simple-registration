import React, { useContext, useEffect, useState } from 'react';
import PersonContext from '../context/PersonContext';
import { sqlForDate } from '../helpers/converters';
import { requestGet } from '../services/requests';
import AlertRemovePerson from './AlertRemovePerson';
import FormUpdatePerson from './FormUpdatePerson';
import RemoveButton from './RemoveButton';
import UpdateButton from './UpdateButton';

export default function ListOfPersons() {
  const [persons, setPersons] = useState([]);
  const [age, setAge] = useState([]);
  const [alertRemove, setAlertRemove] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
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

  const showModalUpdate = (id) => {
    setModalUpdate(true);
    setIdPerson(id);
  };

  const hiddenModalUpdate = () => {
    setModalUpdate(false);
  };

  return (
    <table className="person-table">
      <thead className="header-table">
        <tr>
          <th>Nome</th>
          <th>Data de nascimento</th>
          <th>Idade</th>
          <th colSpan={2}>Opções</th>
        </tr>
      </thead>
      <tbody>
        {
          persons.map(({ id, fullName, birthDate }, index) => {
            const date = sqlForDate(birthDate);

            return (
              <tr key={id} className="row">
                <td className="col">{ fullName }</td>
                <td className="col">{ date }</td>
                <td className="col">{ `${age[index]} anos` }</td>
                <td className="col">
                  <UpdateButton
                    showModalUpdate={showModalUpdate}
                    id={id}
                  />
                </td>
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
      {
        modalUpdate && (
          <div className="modal">
            <FormUpdatePerson
              hiddenModalUpdate={hiddenModalUpdate}
              id={idPerson}
            />
          </div>
        )
      }
    </table>
  );
}
