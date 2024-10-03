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
      className={
        'bg-white flex h-[50px] cursor-pointer items-center justify-between border-b border-black/[8%] px-8 text-[14px] hover:bg-[#fffcf9]'
      }
      onClick={() => onToggleTodo(id)}
    >
      <span className={isCompleted ? 'text-[#ccc] line-through' : ''}>
        {text}
      </span>
      <button
        className="transition-all border border-transparent p-1 rounded-xl hover:border-amber-700/20"
        onClick={onRemove}
      >
        ❌
      </button>
    </div>
  );
}

export default GridItem;
