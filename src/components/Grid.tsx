import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import GridItem from './GridItem.tsx';
import { ITodo } from '../consts/interfaces/ITodo.ts';
import {
  ITodoListContext,
  TodoListContext,
} from '../context/TodoListContextProvider.tsx';

function Grid() {
  const { todoList } = useContext<ITodoListContext>(TodoListContext);

  return (
    <>
      {todoList.length === 0 && (
        <div className="flex p-30 items-center justify-center bg-gray-50">
          <motion.h1
            className="font-bold text-[40px] text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            NO TODOS TO DISPLAY
          </motion.h1>
        </div>
      )}
      {todoList?.length > 0 && (
        <motion.div
          className="overflow-y-auto overflow-x-hidden bg-gray-50"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: 'spring',
          }}
        >
          {todoList.map((todo: ITodo) => (
            <div key={todo.id}>
              <AnimatePresence>
                <GridItem {...todo} />
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default Grid;
