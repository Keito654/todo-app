import { useSuspenseQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import axios from 'axios';
import type { Todo } from 'common/types/todo';
import Card from 'features/card/Card';

const TodoList: FC = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['todo'],
    queryFn: () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos'),
  });

  return (
    <>
      {data.data.map(todo => <Card key={todo.id} title={todo.title} completed={todo.completed} />)}
    </>
  );
};

export default TodoList;
