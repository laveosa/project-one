import { useRef } from 'react';

import Button from './Button.tsx';
import { ButtonTypeEnum } from '../consts/ButtonTypeEnum.ts';

function AddTodoForm({ onAddNewTodo }) {
  const formRef = useRef();

  function onAddToList(event) {
    event.preventDefault();
    onAddNewTodo(formRef.current.value);
    formRef.current.value = '';
  }

  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        ref={formRef}
        type="text"
        className="my-[9px] block h-[45px] w-full rounded-[5px] border border-black/[12%] px-[16px] text-[14px]"
      />
      <Button type={ButtonTypeEnum.SUBMIT} onClick={onAddToList}>
        Add to list
      </Button>
    </form>
  );
}

export default AddTodoForm;
