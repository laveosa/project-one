import React from 'react';

import { ButtonTypeEnum } from '../consts/enums/ButtonTypeEnum.ts';

export interface ButtonModel {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: ButtonTypeEnum;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function Button({
  type = ButtonTypeEnum.BUTTON,
  className,
  disabled,
  children,
  onClick,
}: ButtonModel) {
  return (
    <button
      type={type}
      className={`h-[45px] w-full cursor-pointer rounded-[5px] bg-[#473a2b] text-white hover:bg-[#322618] ${disabled ? 'disabled:opacity-[0.6]' : ''} ${className}`}
      disabled={disabled}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
}

export default Button;
