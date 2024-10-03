import { useContext } from 'react';
import { motion } from 'framer-motion';

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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            NO TODOS TO DISPLAY
          </motion.h1>
        </div>
      )}
      {todoList?.length > 0 && (
        <motion.div
          className="overflow-y-auto bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {todoList.map((todo: ITodo) => (
            <motion.div
              key={todo.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GridItem {...todo} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default Grid;
