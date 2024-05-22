import { useState } from 'react';

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Alert
      </button>
      {toggle || <Alert />}
    </>
  );
};

const Alert = () => {
  return <p className="alert alert-danger">Message</p>;
};

export default ToggleChallenge;
