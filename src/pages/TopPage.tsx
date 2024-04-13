import Grid2 from '@mui/material/Unstable_Grid2';
import Card from 'features/card/Card';
import AddButton from 'features/fabButton/AddButton';
import type { FC } from 'react';

const TopPage: FC = () => {
  return (
    <>
      <Grid2 xs={4} sm={8} md={12}>
        <Card />
      </Grid2>
      <AddButton />
    </>
  );
};

export default TopPage;
