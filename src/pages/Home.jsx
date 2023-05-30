import React, { useState , useEffect } from 'react';
import { getFetch , postFetch , putFetch , deleteFetch } from '../commons/ApiMethods';
import WithLoadingState from '../commons/WithLoadingState';
import List from '../commons/List';

function Home() {
  const LoadingList = WithLoadingState(List);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const [name, setName] = useState('');
  const [breeds, setBreed] = useState('');
  const [messages, setMessage] = useState('');


  useEffect(() => {
    if(!refresh) return
    setLoading(true);
    getFetch('pets').then((data) =>{
      setContents(data);
      setLoading(false);
    });
    setRefresh(false);
  }, [setContents, setLoading, refresh]);


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

  return (
    <div className=''>
      <h2 style={{margin: "4px"}}>Primera conexión API Local</h2>
      <LoadingList isLoading={loading} contents={contents} />

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
  );
}

export default Home;