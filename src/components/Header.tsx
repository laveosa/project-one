import { useContext } from 'react';
import { motion } from 'framer-motion';

import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';
import Logo from '../assets/images/favicon.png';

const Header = () => {
  const { completedTodosAmount, todosAmount } =
    useContext<ITodoListContext>(TodoListContext);

  return (
    <header className="col-[1/3] row-[1/2] flex items-center justify-between border-b border-black/[0.04] bg-[#fbf5ed] px-[20px]">
      <div className="w-[40px]">
        <motion.img
          src={Logo as string}
          alt="logo"
          className="w-full"
          initial={{ opacity: 0, scale: 0, rotate: -360 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: 'spring',
          }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: 'spring',
        }}
      >
        <span className="font-bold">{completedTodosAmount}</span> /{' '}
        {todosAmount} todos completed
      </motion.p>
    </header>
  );
};

export default Header;
