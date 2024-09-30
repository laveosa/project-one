import React from 'react';
import { ButtonTypeEnum } from '../consts/ButtonTypeEnum.ts';

export interface ButtonModel {
  children: React.ReactNode;
  className?: string;
  type?: ButtonTypeEnum;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function Button({
  type = ButtonTypeEnum.BUTTON,
  className,
  children,
  onClick,
}: ButtonModel) {
  return (
    <button
      type={type}
      className={`h-[45px] w-full cursor-pointer rounded-[5px] bg-[#473a2b] text-white hover:bg-[#322618] ${className}`}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
}

export default Button;
