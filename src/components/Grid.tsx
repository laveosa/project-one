import GridItem from './GridItem.tsx';
import { ITodo } from '../consts/interfaces/ITodo.ts';

function Grid({ todoList, setTodoList }) {
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
    <>
      {todoList.length === 0 && (
        <div className="flex p-30 items-center justify-center">
          <h1 className="font-bold text-[40px] text-gray-300">
            NO TODOS TO DISPLAY
          </h1>
        </div>
      )}
      {todoList?.length > 0 && (
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
      )}
    </>
  );
}

export default Grid;
