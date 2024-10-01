import { useState } from 'react';

import './App.css';
import Header from './components/Header.tsx';
import Grid from './components/Grid.tsx';
import Sidebar from './components/Sidebar.tsx';
import { ITodo } from './consts/interfaces/ITodo.ts';

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

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>(initialTodos);

  function onAddNewTodo(text: string) {
    const newTodo: ITodo = {
      id: todoList ? todoList.length + 1 : 0,
      text,
    };

    setTodoList([...todoList, newTodo]);
  }

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
    setTodoList(
      todoList
        .filter((item: ITodo) => item.id !== todoId)
        .map((item: ITodo, idx) => {
          return { ...item, id: idx + 1 };
        })
    );
  }

  function onLogIn() {}

  function onRegister() {}

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f1d4b3]">
      <main className="relative h-[636px] w-[972px]">
        <div className="title absolute -top-28 left-1/2 -translate-x-1/2">
          <h1 className="text-[120px] font-bold uppercase tracking-[0.2em] text-black/5">
            TodoApp
          </h1>
        </div>
        <div className="context relative z-[1] grid h-full grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden rounded-[8px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.08)]">
          <Header todoList={todoList} />
          <Grid
            todoList={todoList}
            onToggleTodo={onToggleTodo}
            onRemoveTodo={onRemoveTodo}
          />
          <Sidebar
            onAddNewTodo={onAddNewTodo}
            onLogIn={onLogIn}
            onRegister={onRegister}
          />
        </div>
      </main>
      <footer className="mt-2 flex w-[972px] items-start text-[11px] opacity-30">
        <small className="text-[11px]">&copy; 2024. Copyright by Dude.</small>
      </footer>
    </div>
  );
}

export default App;
