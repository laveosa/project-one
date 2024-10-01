import { useState } from 'react';

import GridItem from './GridItem.tsx';
import { ITodo } from '../consts/interfaces/ITodo.ts';

const initialTodos: ITodo[] = [
  {
    id: 1,
    text: 'buy groceries',
  },
  {
    id: 2,
    text: 'walk the dog',
  },
  {
    id: 3,
    text: 'do laundry',
    isCompleted: true,
  },
  {
    id: 4,
    text: 'exercise',
  },
];

function Grid() {
  const [todoList, setTodoList] = useState<ITodo[]>(initialTodos);

  function onToggleTodo(todoId: number) {
    setTodoList((todoList: ITodo[]) => {
      return todoList.map((item: ITodo) => {
        if (item.id === todoId) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    });
  }

  function onRemoveTodo(todoId: number) {
    setTodoList(todoList.filter((item: ITodo) => item.id !== todoId));
  }

  return (
    <div>
      {todoList.map((todo: ITodo) => (
        <div key={todo.id}>
          <GridItem
            {...todo}
            onToggleTodo={onToggleTodo}
            onRemoveTodo={onRemoveTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
