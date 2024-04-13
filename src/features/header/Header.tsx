import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import { type FC } from "react";

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar
          variant="dense"
          sx={{
            "&.MuiToolbar-root": {
              paddingLeft: 0,
              paddingRight: 0,
            },
          }}
        >
          <Container sx={{ display: "flex" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TODO
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
