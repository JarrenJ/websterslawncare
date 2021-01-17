import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--invert', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    path,
    active,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkActive = active ? active: null;

  return (
    <Link to={path} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkActive}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
