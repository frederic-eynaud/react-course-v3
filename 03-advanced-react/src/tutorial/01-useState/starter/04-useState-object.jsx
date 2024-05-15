import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Fred');
  const [age, setAge] = useState('50');
  const [hobby, setHobby] = useState('Bird watching');

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys to: {hobby}</h4>
      <button
        className="btn"
        onClick={() => {
          setName('John');
          setAge('28');
          setHobby('Scream at the computer');
        }}
      >
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
