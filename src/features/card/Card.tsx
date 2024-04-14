import { CardContent, Checkbox, FormControlLabel, Card as MuiCard, Typography } from '@mui/material';
import type { Todo } from 'common/types/todo';
import type { FC } from 'react';

type Props = Pick<Todo, 'title' | 'completed'>;

const Card: FC<Props> = ({ title, completed }) => (
  <MuiCard>
    <CardContent>
      <FormControlLabel control={<Checkbox checked={completed} />} label={title} />
    </CardContent>
  </MuiCard>
);

export default Card;
