import React from 'react';

const Counter = () => {
  const [num, setNum] = React.useState(0);

  const handleClick = () => {
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
  };

  return (
      <div className={'counter'}>
        <span className={'number'}>{num}</span>
        <button className={'button'} type={'button'} onClick={handleClick}>Add +</button>
      </div>
  );
};

export default Counter;