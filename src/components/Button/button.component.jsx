import React from 'react';

import './button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn,inverted,dispatchFunc, ...otherProps }) => (
  <button
    onClick={dispatchFunc}
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;