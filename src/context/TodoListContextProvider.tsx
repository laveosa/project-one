import { createContext, useContext, useState } from 'react';

import { TodoModel } from '../consts/models/TodoModel.ts';
import { AuthContext } from './AuthContextProvider.tsx';
import LocalStorageService from '../util/services/localStorageService.ts';
import { LocalStorageKeyEnum } from '../consts/enums/LocalStorageKeyEnum.ts';
import { idGenerator } from '../util/helpers/appHelper.ts';

export interface ITodoListContext {
  todoList: TodoModel[];
  todosAmount: number;
  completedTodosAmount: number;
  addNewTodo: (value: string) => void;
  toggleTodo: (todoId: string) => void;
  removeTodo: (todoId: string) => void;
}

export const TodoListContext = createContext<ITodoListContext>(null);

function TodoListContextProvider({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const todoListInitialState: TodoModel[] =
    LocalStorageService.getItem<TodoModel[]>(LocalStorageKeyEnum.TODO) || [];
  const [todoList, setTodoList] = useState<TodoModel[]>(todoListInitialState);
  const todosAmount = todoList.length;
  const completedTodosAmount = todoList.filter(
    (todo: TodoModel) => todo.isCompleted
  ).length;

  function addNewTodo(text: string): void {
    if (todoList.length >= 3 && !isAuthenticated) {
      window.alert('Log in to add more than 3 todos');
      return;
    }

    const todos: TodoModel[] = [
      {
        id: idGenerator(),
        text,
      },
      ...todoList,
    ];
    setTodoList(todos);
    LocalStorageService.setItem(LocalStorageKeyEnum.TODO, todos);
  }

  function toggleTodo(todoId: string): void {
    setTodoList((todoList: TodoModel[]) => {
      const todos: TodoModel[] = todoList.map((item: TodoModel) => {
        if (item.id === todoId) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });

      LocalStorageService.setItem(LocalStorageKeyEnum.TODO, todos);
      return todos;
    });
  }

  function removeTodo(todoId: string): void {
    const todos: TodoModel[] = todoList.filter(
      (item: TodoModel) => item.id !== todoId
    );
    setTodoList(todos);
    LocalStorageService.setItem(LocalStorageKeyEnum.TODO, todos);
  }

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        todosAmount,
        completedTodosAmount,
        addNewTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export default TodoListContextProvider;
