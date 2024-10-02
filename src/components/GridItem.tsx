import { useContext } from 'react';

import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';

function GridItem({ id, text, isCompleted }) {
  const { onToggleTodo, onRemoveTodo } =
    useContext<ITodoListContext>(TodoListContext);

  function onRemove(event) {
    event.stopPropagation();
    onRemoveTodo(id);
  }

  return (
    <div
      className={`flex h-[50px] cursor-pointer items-center justify-between border-b border-black/[8%] px-8 text-[14px]`}
      onClick={() => onToggleTodo(id)}
    >
      <span className={isCompleted ? 'text-[#ccc] line-through' : ''}>
        {text}
      </span>
      <button onClick={onRemove}>❌</button>
    </div>
  );
}

export default GridItem;
