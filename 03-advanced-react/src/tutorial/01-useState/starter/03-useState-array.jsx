import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                setPeople(people.filter((person) => person.id !== id));
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
