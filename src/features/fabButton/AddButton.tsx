import { Fab } from '@mui/material';
import type { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

const AddButton: FC = () => {
  return (
    <Fab color="secondary" aria-label="add" sx={{ position: 'relative' }}>
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
