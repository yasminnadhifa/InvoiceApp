import React from 'react';

const Card = (props) => {
    const {  children, showSeparator = false  } = props
  return (
    <div className="p-6 bg-white rounded shadow">
      {children}
    </div>
  );
};

export default Card;
