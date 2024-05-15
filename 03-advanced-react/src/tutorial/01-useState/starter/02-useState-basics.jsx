// import { useState } from 'react';
import React from 'react';

const UseStateBasics = () => {
  // return <h2>useState basics</h2>;
  // const [count, setCount] = useState(0);
  const [count, setCount] = React.useState(0);
  console.log(count);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h4>Incrementor</h4>
      <h4>New count: {count}</h4>
      <button className="btn" type="button" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default UseStateBasics;
