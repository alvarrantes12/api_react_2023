import React, { useState } from 'react';
import Index from '../components/Pets/index';
import New from '../components/Pets/new';
import Edit from '../components/Pets/edit';
import Delete from '../components/Pets/delete'

function Home() {

  const [refresh, setRefresh] = useState(true);
  return (
    <div classNam=''>

      <Index refresh={refresh} setRefresh={setRefresh}/>
      <New setRefresh={setRefresh} />
      <Edit setRefresh={setRefresh} />
      <Delete setRefresh={setRefresh} />

    </div>
  );
}

export default Home;