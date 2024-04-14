import axios from 'axios';
import type { Todo } from 'common/types/todo';
import { atomWithQuery } from 'jotai-tanstack-query';

export const todosAtom = atomWithQuery(() => ({
  queryKey: ['todo'],
  queryFn: () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos'),
}));
