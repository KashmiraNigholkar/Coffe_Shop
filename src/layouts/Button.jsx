import React from 'react';

const Button = ({ title }) => {
  return (
    <button className='px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'>
      {title}
    </button>
  );
};

export default Button;
