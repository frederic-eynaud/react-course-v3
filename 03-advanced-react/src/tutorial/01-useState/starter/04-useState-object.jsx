import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState('Fred');
  // const [age, setAge] = useState('50');
  // const [hobby, setHobby] = useState('Bird watching');
  const [person, setPerson] = useState({
    name: 'Frederic',
    age: 50,
    hobby: 'Bird watching',
  });

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button
        className="btn"
        onClick={() => {
          // setName('John');
          // setAge('28');
          // setHobby('Scream at the computer');
          setPerson({
            name: 'John',
            age: 28,
            hobby: 'Scream at the computer',
          });
        }}
      >
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
