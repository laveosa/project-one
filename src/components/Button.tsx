import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.button
      className={`h-[45px] w-full cursor-pointer rounded-[5px] bg-[#473a2b] text-white hover:bg-[#322618] ${disabled ? 'disabled:opacity-[0.6]' : ''} ${className}`}
      type={type}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 1.05 }}
      transition={{ type: 'spring', duration: 0.05, stiffness: 600 }}
      onClick={(event) => onClick(event)}
    >
      {children}
    </motion.button>
  );
}

export default Button;
