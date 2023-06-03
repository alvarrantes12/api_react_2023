import React, {useState} from 'react';
import { postFetch, putFetch, deleteFetch } from '../commons/ApiMethods';
import Index from '../components/Pets/index';
import New from '../components/Pets/new';
import Edit from '../components/Pets/edit';

function Home() {
  
  const [refresh, setRefresh] = useState(true);

  const [idDelete, setIdDelete] = useState('')
  const [messageDelete, setMessageDelete] = useState('')

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      deleteFetch(`pets/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Eliminado correctamente');
          setRefresh(true);
        })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh}/>

      <New setRefresh={setRefresh}/>

      <Edit setRefresh={setRefresh}/>

      <form onSubmit={handleDelete}>
        <div>
          <input 
              type='text'
              value={idDelete}
              placeholder='Numero id'
              onChange={(e) => {setIdDelete(e.target.value);}} />
        </div>
        <div>{messageDelete ?<p>{messageDelete}</p> : <br />}</div>
        <button type='submit'>Eliminar</button>
      </form>

    </div>
  );
}

export default Home;