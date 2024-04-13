import type { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Container } from "@mui/material";
import type React from "react";
import Header from "features/header/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Box
      sx={{
        marginBottom: (theme) => theme.spacing(2),
      }}
    >
      <Header />
    </Box>
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {children}
      </Grid>
    </Container>
  </>
);
