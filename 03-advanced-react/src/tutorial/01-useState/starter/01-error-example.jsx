const ErrorExample = () => {
  let count = 0;
  // return <h2>useState error example</h2>;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn" type="button">
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
