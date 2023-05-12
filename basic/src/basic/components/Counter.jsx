import React from 'react';

const Counter = ({count, onClick}) => {
  const [num, setNum] = React.useState(0);

  const handleClick = () => {
    setNum(prev => prev + 1);
    onClick();
  };

  return (
      <div className={'counter'}>
        <span className={'number'}>{num} / {count}</span>
        <button className={'button'} type={'button'} onClick={handleClick}>Add +</button>
      </div>
  );
};

export default Counter;