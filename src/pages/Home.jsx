import React, { useState} from 'react';
import { putFetch, deleteFetch } from '../commons/ApiMethods';
import Index from '../components/Pets/index'
import New from '../components/Pets/new'

function Home() {

  const [refresh, setRefresh] = useState(true);

  const [nameEdit, setNameEdit] = useState('');
  const [idEdit, setIdEdit] = useState('');
  const [messageEdit, setmessageEdit] = useState('');

  const [idDelete, setIdDelete] = useState('');
  const [messageDelete, setMessageDelete] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try{
      deleteFetch(`pets/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Eliminado');
          setRefresh(true);
        })
    }catch(error) {
      console.log(error)
    }
}

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`pets/${idEdit}`, {name: nameEdit})
        .then(() => {
          setNameEdit('');
          setIdEdit('');
          setmessageEdit('Editado correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  }





  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh}/>

      <New setRefresh={setRefresh} />

      <form onSubmit={handleEdit}>
        <div>
        <input 
          type='text'
          value={idEdit}
          placeholder='Número id'
          onChange={(e) => {setIdEdit(e.target.value);}} />
        </div>

        <div>
        <input 
          type='text'
          value={nameEdit}
          placeholder='Nuevo nombre de mascota'
          onChange={(e) => {setNameEdit(e.target.value);}} />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button type='submit'>Editar</button>
      </form>

      <form onSubmit={handleDelete}>
        <div>
        <input 
          type='text'
          value={idDelete}
          placeholder='Número de ID'
          onChange={(e) => {setIdDelete(e.target.value);}} />
        </div>

        <div>{messageDelete ? <p>{messageDelete}</p> : <br />}</div>
        <button type='submit'>Eliminar</button>
      </form>
      
    </div>
  );
}

export default Home;