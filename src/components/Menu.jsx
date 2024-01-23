import React from "react";
import twitter from "../assets/twitter.png";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Menu() {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column" }} pl={7} pt={2}>
        <img src={twitter} alt="twitterLogo" width="40px" />

        <Box pt={2} sx={{ display: "flex" }}>
          <HomeIcon fontSize="large" />
          <Box pl={2} pt={0.4}>
            <Typography variant="h6">Home</Typography>
          </Box>
        </Box>
        <Box pt={2} sx={{ display: "flex" }}>
          <SearchIcon fontSize="large" />
          <Box pl={2} pt={0.4}>
            <Typography variant="h6">Explore</Typography>
          </Box>
        </Box>
        <Box pt={2} sx={{ display: "flex" }}>
          <NotificationsNoneIcon fontSize="large" />
          <Box pl={2} pt={0.4}>
            <Typography variant="h6">Notifications</Typography>
          </Box>
        </Box>
        <Box pt={2} sx={{ display: "flex" }}>
          <MailOutlineIcon fontSize="large" />
          <Box pl={2} pt={0.4}>
            <Typography variant="h6">Messages</Typography>
          </Box>
        </Box>
        <Box pt={2} sx={{ display: "flex" }}>
          <PermIdentityIcon fontSize="large" />
          <Box pl={2} pt={0.4}>
            <Typography variant="h6">Profile</Typography>
          </Box>
        </Box>
        <Box pt={2} sx={{ display: "flex" }}>
          <MoreHorizIcon fontSize="large" />
          <Box pl={2} pt={0.4}>
            <Typography variant="h6">More</Typography>
          </Box>
        </Box>
      </Box>
      <Box pl={7} pt={2}>
        <Button variant="contained" size="large">
          Post
        </Button>
      </Box>
    </Box>
  );
}

export default Menu;
