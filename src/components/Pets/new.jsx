import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
    
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('pets', { name: name, breed: breed, pedigree: true, owner_id: 1 })
        .then((response) => {
          setName('');
          setBreed('');
          setMessage('Creado correctamente');
          setRefresh(true);
        })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Nombre de la mascota"
            onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div>
          <input
            type="text"
            value={breed}
            placeholder="Raza de la mascota"
            onChange={(e) => { setBreed(e.target.value) }} />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type="submit">Crear</button>
      </form>
    </>
  )
}

export default New;