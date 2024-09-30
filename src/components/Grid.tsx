import GridItem from './GridItem.tsx';

const initialTodos = ['buy groceries', 'walk the dog', 'do laundry'];

function Grid() {
  return (
    <div>
      <div>
        {initialTodos.map((todo: string) => (
          <GridItem>{todo}</GridItem>
        ))}
      </div>
    </div>
  );
}

export default Grid;
