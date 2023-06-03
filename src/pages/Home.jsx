import React, { useState, useEffect } from 'react';
import { getFetch, postFetch, putFetch, deleteFetch } from '../commons/ApiMethods';
import Index from '../components/Pets/index';
import New from '../components/Pets/new';

function Home() {
 
  const [refresh, setRefresh] = useState(true);

  const[nameEdit, setNameEdit] = useState('');
  const[idEdit, setIdEdit] = useState('');
  const[messageEdit, setMessageEdit] = useState('');

  const[idDelete, setIdDelete] = useState('');
  const[messageDelete, setMessageDelete] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try{
      deleteFetch(`pets/${idDelete}`)
        .then(() => {
          setIdDelete('');
          setMessageDelete('Eliminado exitosamente');
          setRefresh(true);
        })

    }catch (error){
      console.log(error);
    }
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`pets/${idEdit}`, { name: nameEdit})
        .then(() => {
          setNameEdit('');
          setIdEdit('');
          setMessageEdit('Editado Correctamente');
          setRefresh(true);
        })
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div className=''>
    <Index refresh={refresh} setRefresh={setRefresh}/>
    <New setRefresh= {setRefresh}/>
     
     <form onSubmit={handleEdit}>
      <div>
       <input
         type='text'
         value={idEdit}
         placeholder='Número Id'
         onChange={(e) => {setIdEdit(e.target.value);}}/>
     </div>
     <div>
       <input
         type='text'
         value={nameEdit}
         placeholder='Nuevo nombre de mascota'
         onChange={(e) => { setNameEdit(e.target.value);}} />
     </div>
     <div>{message ? <p>{message}</p> : <br />}</div>
     <button type='submit'>Editar</button>
   </form>

   <form onSubmit={handleDelete}>
    <div>
     <input
       type='text'
       value={idDelete}
       placeholder='Número Id'
       onChange={(e) => {setIdDelete(e.target.value);}}/>
   </div>

   <div>{message ? <p>{message}</p> : <br />}</div>
   <button type='submit'>Eliminar</button>
 </form>

</div>
  );
}

export default Home;