import { createContext, useContext, useState } from 'react';

import { ITodo } from '../consts/interfaces/ITodo.ts';
import { AuthContext } from './AuthContextProvider.tsx';
import LocalStorageService from '../util/services/localStorageService.ts';
import { LocalStorageKeyEnum } from '../consts/enums/LocalStorageKeyEnum.ts';

export interface ITodoListContext {
  todoList: ITodo[];
  todosAmount: number;
  completedTodosAmount: number;
  onAddNewTodo: (value: string) => void;
  onToggleTodo: (todoId: number) => void;
  onRemoveTodo: (todoId: number) => void;
}

export const TodoListContext = createContext<ITodoListContext>(null);

function TodoListContextProvider({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const todoListInitialState: ITodo[] =
    LocalStorageService.getItem<ITodo[]>(LocalStorageKeyEnum.TODO) || [];
  const [todoList, setTodoList] = useState<ITodo[]>(todoListInitialState);
  const todosAmount = todoList.length;
  const completedTodosAmount = todoList.filter(
    (todo: ITodo) => todo.isCompleted
  ).length;

  function onAddNewTodo(text: string) {
    const newTodo: ITodo = {
      id: todoList ? todoList.length + 1 : 0,
      text,
    };

    if (todoList.length >= 3 && !isAuthenticated) {
      window.alert('Log in to add more than 3 todos');
      return;
    }

    const todos: ITodo[] = [newTodo, ...todoList];
    setTodoList(todos);
    LocalStorageService.setItem(LocalStorageKeyEnum.TODO, todos);
  }

  function onToggleTodo(todoId: number) {
    setTodoList((todoList: ITodo[]) => {
      const todos: ITodo[] = todoList.map((item: ITodo) => {
        if (item.id === todoId) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });

      LocalStorageService.setItem(LocalStorageKeyEnum.TODO, todos);
      return todos;
    });
  }

  function onRemoveTodo(todoId: number) {
    const todos: ITodo[] = todoList
      .filter((item: ITodo) => item.id !== todoId)
      .map((item: ITodo, idx) => {
        return { ...item, id: idx + 1 };
      });

    LocalStorageService.setItem(LocalStorageKeyEnum.TODO, todos);
    setTodoList(todos);
  }

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        todosAmount,
        completedTodosAmount,
        onAddNewTodo,
        onToggleTodo,
        onRemoveTodo,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export default TodoListContextProvider;
