import React, { useState } from 'react'
import { data } from '../data'
const ArrayRemove = () => {
    const [people,setPeople] = useState(data);
    const handleRemove = (id) =>{
        let newPeople = people.filter((data) => data.id !== id);
        setPeople(newPeople);
    };
  return (
    <div>
        {people.map((data)=>{
            return (<div key={data.id}>
                <h2>{data.name}</h2>
                <button type='button' onClick={() => handleRemove(data.id)}>Remove</button>
            </div>);
        })}
        <button type='button' onClick={() => setPeople([])}>Clear</button>
    </div>
  );
}

export default ArrayRemove