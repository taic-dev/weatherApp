import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const index = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Weather
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default index;