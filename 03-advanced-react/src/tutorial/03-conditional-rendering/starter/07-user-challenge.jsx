import { useEffect, useState } from 'react';

const UserChallenge = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    setMessage(visible ? 'Person logged in' : 'Please Login');
    setButtonText(visible ? 'Logout' : 'Login');
  }, [visible]);

  return (
    <>
      <h4>{message}</h4>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default UserChallenge;
