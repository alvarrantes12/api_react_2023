import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New ({ setRefresh }) {
    const [name, setName] = useState('');
    const [breeds, setBreed] = useState('');
    const [messages, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          postFetch('pets', {name: name, breeds: breeds, peedigree: true, owner_id: 1})
          .then((response) => {
            setName('');
            setBreed('');
            setMessage('Creado correctamente');
            setRefresh(true);
          })
    
        } catch (err) {
          console.log(err);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} placeholder='Nombre de la mascota' onChange={(e) => {setName(e.target.value); }} />
                </div>
                <div>
                    <input type="text" value={breeds} placeholder='Raza de la mascota' onChange={(e) => { setBreed(e.target.value); }} />
                </div>
                <div>{messages ? <p>{messages}</p> : <br />}</div>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}

export default New;