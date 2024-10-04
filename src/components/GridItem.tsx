import { useContext } from 'react';
import { motion, useAnimate } from 'framer-motion';

import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';

function GridItem({ id, text, isCompleted }) {
  const { onToggleTodo, onRemoveTodo } =
    useContext<ITodoListContext>(TodoListContext);
  const [scope, animate] = useAnimate();

  function onRemove(event) {
    event.stopPropagation();

    // TODO fix remove grid item animation
    let element = document.getElementById(`GridItem_${id}`);
    animate(element, { x: -300, opacity: 0 }, { duration: 0.2 }).then(() => {
      element = null;
      onRemoveTodo(id);
    });

    // onRemoveTodo(id);
  }

  return (
    <motion.div
      ref={scope}
      id={`GridItem_${id}`}
      className={
        'bg-white flex h-[50px] cursor-pointer items-center justify-between border-b border-black/[8%] px-8 text-[14px] hover:bg-[#fffcf9]'
      }
      variants={{
        hidden: { opacity: 0, x: 60, y: 60, margin: '10px' },
        visible: { opacity: 1, x: 0, y: 0, margin: 0 },
      }}
      exit={{ x: -300, opacity: 0 }}
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
    </motion.div>
  );
}

export default GridItem;
