import React, { useState } from 'react';
import { deleteFetch } from '../commons/ApiMethods';
import Index from '../components/Pets/index';
import New from '../components/Pets/new';
import Edit from '../components/Pets/edit';
import Delete from '../components/Pets/delete';

function Home() {
  const [refresh, setRefresh] = useState(true);
  
  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh}/>
      <New refresh={refresh} setRefresh={setRefresh} />
      <Edit refresh={refresh} setRefresh={setRefresh} />
      <Delete refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
}

export default Home;