import React, { useState } from 'react'

const CountButton = () => {
    //let count = 0;
    const [count,setCount] = useState(0);
    const handleCount = () =>{
        setCount(count + 1);
    };
    const handleResetCount = () =>{
        setCount('pant');
    };
  return (
    <div>
        <h1>{count}</h1>
      <button type='button' onClick={handleCount} className='btn'>Count</button>
      <button type='button' onClick={handleResetCount} className='btn'>Count</button>
    </div>
  );
}

export default CountButton
