import AddTodoForm from './AddTodoForm.tsx';
import Button from './Button.tsx';
import { ITodo } from '../consts/interfaces/ITodo.ts';

function Sidebar({ todoList, setTodoList }) {
  function onAddNewTodo(text: string) {
    const newTodo: ITodo = {
      id: todoList ? todoList.length + 1 : 0,
      text,
    };

    console.log('NEW TODO: ', newTodo);

    setTodoList([...todoList, newTodo]);
  }

  return (
    <section className="col-[2/3] row-[2/3] flex flex-col border-l border-black/[0.04] bg-[#fffcf9] px-[25px] pb-[28px] pt-[18px]">
      <AddTodoForm onAddNewTodo={onAddNewTodo} />
      <div className="mt-auto space-y-2">
        <Button>Log in</Button>
        <Button>Register</Button>
      </div>
    </section>
  );
}

export default Sidebar;
