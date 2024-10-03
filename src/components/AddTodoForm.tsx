import { useContext, useState } from 'react';

import Button from './Button.tsx';
import { ButtonTypeEnum } from '../consts/enums/ButtonTypeEnum.ts';
import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';
import useFocus from '../util/hooks/useFocus.ts';

function AddTodoForm() {
  const [inputRef, setInputFocus] = useFocus();
  const [newTodo, setNewTodo] = useState('');
  const { onAddNewTodo } = useContext<ITodoListContext>(TodoListContext);

  function onEnter(event) {
    if (event.key !== 'Enter') return;
    onAddNewTodo(newTodo);
    setNewTodo('');
  }

  function onAddToList(event) {
    event.preventDefault();
    onAddNewTodo(newTodo);
    setNewTodo('');
    setInputFocus();
  }

  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        ref={inputRef}
        value={newTodo}
        type="text"
        className="my-[9px] block h-[45px] w-full rounded-[5px] border border-black/[12%] px-[16px] text-[14px]"
        onKeyDown={onEnter}
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
