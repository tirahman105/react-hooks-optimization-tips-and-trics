type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  return (
    <div className="border p-10 shadow-md">
      <h1 className="text-3xl">Counter</h1>
      <h1 className="text-3xl">{counter}</h1>
      <button
        className="btn btn-primary "
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      {/* <button className="btn-primary " onClick={handleAsyncIncrement}>
        Async Increment
      </button>
      <button
        className="btn-primary "
        onClick={() => setCounter((prvStatus) => prvStatus - 1)}
      >
        Decrement
      </button> */}
      <button className="btn-primary" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
