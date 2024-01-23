import { Box } from "@mui/material";
import React from "react";
import Menu from "./Menu";
import Posts from "./Posts";
import Right from "./Right";

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box flex={1}>
        <Menu />
      </Box>
      <Box flex={1}>
        <Posts />
      </Box>
      <Box flex={1} pl={2} pt={1} sx={{ margin: "0 2rem" }}>
        <Right />
      </Box>
    </Box>
  );
}

export default Dashboard;
