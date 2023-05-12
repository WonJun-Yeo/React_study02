import React from 'react';
import Counter from "./components/Counter";

const CountJsx = () => {

  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(prevState => prevState + 1);
  };

  return (
      <div>
        <p>total count: {count}</p>
        <Counter count={count} onClick={handleClick}/>
        <Counter count={count} onClick={handleClick}/>
      </div>
  );
};

export default CountJsx;