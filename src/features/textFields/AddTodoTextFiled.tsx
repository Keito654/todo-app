import { IconButton, InputAdornment, TextField } from '@mui/material';
import type { FC } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddTodoInputField: FC = () => {
  return (

    <>
      <TextField
        label="Todoを追加"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="submit" edge="end">
                <AddCircleOutlineIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default AddTodoInputField;
