import { useContext } from 'react';

import AddTodoForm from './AddTodoForm.tsx';
import Button from './Button.tsx';
import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';

function Sidebar() {
  const { onLogIn, onRegister } = useContext<ITodoListContext>(TodoListContext);

  return (
    <section className="col-[2/3] row-[2/3] flex flex-col border-l border-black/[0.04] bg-[#fffcf9] px-[25px] pb-[28px] pt-[18px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        <Button onClick={onLogIn}>Log in</Button>
        <Button onClick={onRegister}>Register</Button>
      </div>
    </section>
  );
}

export default Sidebar;
