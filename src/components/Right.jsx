import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Modiji from "../assets/Modiji.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import fashion from "../assets/fashion.jpg";

function Right() {
  return (
    <Box flex={1} sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#e8eaf6",
          borderRadius: "20px",
        }}
        pl={1}
      >
        <SearchIcon sx={{ mr: 1, my: 1 }} />

        <TextField
          label="Search"
          variant="standard"
          type="search"
          size="small"
        ></TextField>
      </Box>

      <Box
        py={1}
        pb={2}
        sx={{
          backgroundColor: "#e8eaf6",
          borderRadius: "20px",
        }}
        margin="1rem 0 0 0"
        pl={1}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }} pt={1} pb={1}>
          Subscribe to Premium
        </Typography>
        <Typography varient="h6" pb={1}>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "black" }}>
          Subscribe
        </Button>
      </Box>
      <Box
        sx={{ backgroundColor: "#e8eaf6", borderRadius: "20px" }}
        margin="1rem 0"
        pl={1}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }} pt={1} pb={1}>
          Live on X
        </Typography>
        <Box sx={{ display: "flex" }}>
          <img src={Modiji} alt="modiji" width="20px"></img>
          <Typography variant="body2" sx={{ fontWeight: "bold" }} pl={0.5}>
            Narendra Modi
          </Typography>
          <VerifiedIcon sx={{ fontSize: 20, color: "#0288d1" }} />
          <Typography variant="body2" pl={0.5}>
            is hosting
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          pl={0.6}
          pt={1}
          pb={1}
        >
          Divine Ayodhya Conclave
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#e8eaf6",
          borderRadius: "20px",
        }}
        pl={1}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }} pt={1} pb={1}>
          What's happening
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Menswear Fashion Weeks
            </Typography>
            <Typography variant="subtitle2">Fashion . LIVE</Typography>
          </Box>
          <Box pl={5}>
            <img src={fashion} alt="Fashion" width="100px"></img>
          </Box>
        </Box>
        <Box pt={2}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            #SamsungUnpacked
          </Typography>
          <Typography variant="body1">Galaxy AI is coming</Typography>
        </Box>
        <Box pt={2} pb={1}>
          <Typography variant="body2">Business & Finance . Trending</Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            #StockMarketNews
          </Typography>
          <Typography variant="body2" color="#0288d1">
            Trending with #AyodhyaRamMandir
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Right;
