import type { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container, Paper, Toolbar } from '@mui/material';
import type React from 'react';
import Header from 'features/header/Header';
import AddTodoInputField from 'features/textFields/AddTodoTextFiled';

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Toolbar />
    <Container>
      {children}
    </Container>
  </>
);
