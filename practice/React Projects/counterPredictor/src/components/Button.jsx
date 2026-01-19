import React from 'react';

const Button = ({ btnIcon, btnName, onClick, disabled }) => {
  const handleClick = () => {
    console.log(`Button clicked: ${btnName}`);
    console.log("onClick prop is:", onClick);
    if (typeof onClick === 'function') {
      onClick();
    } else {
      console.warn('onClick prop is not a function!');
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className='inline-flex items-center gap-2 text-xs py-1 rounded-xl border border-white/10 bg-white/5 p-3'>
        {btnIcon} {btnName}
      </button>
    </div>
  );
};

export default Button;
