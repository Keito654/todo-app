import type { FC } from 'react';
import Card from 'features/card/Card';
import { useAtom } from 'jotai';
import { todosAtom } from 'common/atoms/todoAtom';

const TodoList: FC = () => {
  const [{ data }] = useAtom(todosAtom);

  return (
    <>
      {data?.data.map(todo => <Card key={todo.id} title={todo.title} completed={todo.completed} />)}
    </>
  );
};

export default TodoList;
