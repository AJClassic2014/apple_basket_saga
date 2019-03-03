import React from 'react';

const Button = ({
  picking,
  pickApple
}) => (
    <button 
    className={picking ? "disabled" : "btn-pick"} 
    onClick={pickApple}
    >
      Pick Apple
</button>
  );

export default Button;