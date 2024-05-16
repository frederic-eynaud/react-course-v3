import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={() => {
          setValue((value) => {
            const newValue = value + 1;
            return newValue;
          });
          console.log(value);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default UseStateGotcha;
