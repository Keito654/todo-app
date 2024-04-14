import { Container, Paper, Stack, Toolbar } from '@mui/material';
import Card from 'features/card/Card';
import AddTodoInputField from 'features/textFields/AddTodoTextFiled';
import TodoList from 'features/todo/TodoList';
import { type FC, Suspense } from 'react';

const TopPage: FC = () => {
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Stack spacing={2}>
          <TodoList />
        </Stack>
      </Suspense>
      <Toolbar sx={{ marginBlock: theme => theme.spacing(4) }} />
      <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBlock: theme => theme.spacing(2, 4) }}>
        <Container>
          <AddTodoInputField />
        </Container>
      </Paper>
    </>
  );
};

export default TopPage;
