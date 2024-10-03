import { useContext } from 'react';
import Logo from '../assets/images/favicon.png';

import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';

const Header = () => {
  const { completedTodosAmount, todosAmount } =
    useContext<ITodoListContext>(TodoListContext);

  return (
    <header className="col-[1/3] row-[1/2] flex items-center justify-between border-b border-black/[0.04] bg-[#fbf5ed] px-[20px]">
      <div className="w-[40px]">
        <img src={Logo as string} alt="logo" className="w-full" />
      </div>
      <p>
        <span className="font-bold">{completedTodosAmount}</span> /{' '}
        {todosAmount} todos completed
      </p>
    </header>
  );
};

export default Header;
