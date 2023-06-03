import React, { useState } from 'react';
import { deleteFetch } from '../../commons/ApiMethods';

function Delete({ setRefresh }) {

    const [idDelete, setIdDelete] = useState('');
    const [messageDelete, setMessageDelete] = useState('');
  
    const handleDelete = async (event) => {
      event.preventDefault();
      try {
        deleteFetch(`pets/${idDelete}`)
          .then(()=> {
            setIdDelete('')
            setMessageDelete('Eliminado Correctamente')
            setRefresh(true);
          })
      }
      catch (error) {
        console.log(error)
      }
    }
    return (
        <>
        <form onSubmit={handleDelete}>
            <div>
            <input
                type="text"
                value={idDelete}
                placeholder="Numero de id"
                onChange={(e) => { setIdDelete(e.target.value) }} />
            </div>

            <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
        <button type="submit">Delete</button>
      </form>    
        </>
    ) 
}
export default Delete;