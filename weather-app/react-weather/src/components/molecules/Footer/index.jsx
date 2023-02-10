import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
import styles from "./styles";

const Index = () => {
  const [buttonColor, setButtonColor] = useState(0);

  return (
    <Box style={ styles }>
      <BottomNavigation
        showLabels
        value={buttonColor}
        onChange={(event, newValue) => {
          setButtonColor(newValue);
        }}
        style={{ justifyContent: "space-around" }}
      >
        <BottomNavigationAction
          label="Weather"
          icon={<WbSunnyIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Location"
          icon={<LocationOnIcon />}
          component={Link}
          to="/location"
        />
      </BottomNavigation>
    </Box>
  );
};

export default Index;