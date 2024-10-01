import GridItem from './GridItem.tsx';
import { ITodo } from '../consts/interfaces/ITodo.ts';

function Grid({ todoList, onToggleTodo, onRemoveTodo }) {
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
