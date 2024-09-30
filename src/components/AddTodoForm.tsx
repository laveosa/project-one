import Button from './Button.tsx';
import { ButtonTypeEnum } from '../consts/ButtonTypeEnum.ts';

function AddTodoForm() {
  function onAddToList(event) {
    event.preventDefault();

    console.log('Add New Todo');
  }

  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
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
