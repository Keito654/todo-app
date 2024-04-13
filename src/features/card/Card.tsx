import { CardContent, Card as MuiCard, Typography } from '@mui/material';
import type { FC } from 'react';

const Card: FC = () => (
  <MuiCard>
    <CardContent>
      <Typography variant="body1">aaa</Typography>
    </CardContent>
  </MuiCard>
);

export default Card;
