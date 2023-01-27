import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const Footer = ({ buttonColor, setButtonColor }) => {
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={buttonColor}
        onChange={(event, newValue) => {
          setButtonColor(newValue);
        }}
        style={{justifyContent: "space-around"}}
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

export default Footer;
