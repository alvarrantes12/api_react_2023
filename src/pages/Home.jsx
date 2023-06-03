import React, { useState, useEffect } from 'react';
import { deleteFetch, postFetch, putFetch } from '../commons/ApiMethods';
import Index from '../components/Pets/index'
import New from '../components/Pets/new'
import Edit from '../components/Pets/edit'
import Delete from '../components/Pets/delete';
function Home() {

  const [refresh, setRefresh] = useState(true)

  


  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh} />
      <New setRefresh={setRefresh}/>
      <Edit setRefresh={setRefresh}/>
      <Delete setRefresh={setRefresh}/>
      
    </div>
  );   
}

export default Home;