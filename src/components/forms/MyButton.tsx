import React from 'react';

const MyButton: ({
  children,
  disabled,
  onClick,
  ...props
}: {
  children: string;
  onClick?: Function;
  disabled?: boolean | undefined;
}) => JSX.Element = ({children, disabled, onClick, ...props}) => {
  return (
    <button
      onClick={(event) => {
        if (onClick && onClick instanceof Function) {
          onClick(event);
        }
      }}
      disabled={disabled ? true : false}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
