import type { FC } from 'react';
import { Container, Toolbar } from '@mui/material';
import type React from 'react';
import Header from 'features/header/Header';

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
