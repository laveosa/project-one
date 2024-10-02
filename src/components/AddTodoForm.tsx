import { useContext, useState } from 'react';

import Button from './Button.tsx';
import { ButtonTypeEnum } from '../consts/enums/ButtonTypeEnum.ts';
import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';

function AddTodoForm() {
  const { onAddNewTodo } = useContext<ITodoListContext>(TodoListContext);
  const [newTodo, setNewTodo] = useState('');

  function onAddToList(event) {
    event.preventDefault();
    onAddNewTodo(newTodo);
    setNewTodo('');
  }

  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        value={newTodo}
        type="text"
        className="my-[9px] block h-[45px] w-full rounded-[5px] border border-black/[12%] px-[16px] text-[14px]"
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button
        type={ButtonTypeEnum.SUBMIT}
        disabled={newTodo.length === 0}
        onClick={onAddToList}
      >
        Add to list
      </Button>
    </form>
  );
}

export default AddTodoForm;
