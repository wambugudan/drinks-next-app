'use client'

import {useState} from 'react'

const ClientPage = () => {

  const [num, setNum] = useState(0);

  const handleAdd = () =>{
    setNum(num + 1);
  }

  const handleMinus = () =>{
    setNum(num - 1);
  }

  return (
    <div>
       <button className="btn btn-secondary" onClick={handleAdd}>+</button>
        { num }
      <button className="btn btn-secondary" onClick={handleMinus}>-</button>
    </div>
  )
}

export default ClientPage