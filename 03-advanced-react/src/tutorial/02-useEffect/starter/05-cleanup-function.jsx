import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {}, [toggle]);
  return (
    <>
      <button
        className="btn"
        type="button"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle component
      </button>
      {toggle && <TextToDisplay />}
    </>
  );
};

const TextToDisplay = () => {
  useEffect(() => {
    console.log('clicking');
  }, []);
  return <h3>Hello There</h3>;
};

export default CleanupFunction;
