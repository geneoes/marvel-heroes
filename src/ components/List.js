import React from 'react';
import { Link } from 'react-router-dom';

function List() {
  return (
    <aside>
      <Link to={'/hero/myid2'}>Hero 2</Link>
      <Link to={'/hero/myid3'}>Hero 3</Link>
      <Link to={'/hero/myid4'}>Hero 4</Link>
    </aside>
  )
}

export default List;