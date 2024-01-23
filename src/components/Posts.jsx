import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ShriRam from "../assets/ShriRam.png";
import PublicIcon from "@mui/icons-material/Public";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TodayIcon from "@mui/icons-material/Today";
import PollIcon from "@mui/icons-material/Poll";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import axiosBaseURL from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShreeRamJi from "../assets/ShreeRamJI.png";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import Mandir from "../assets/Mandir.jpg";
import Ramji from "../assets/Ramji.jpeg";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RefreshIcon from "@mui/icons-material/Refresh";

function Posts() {
  //   const [post, setPosts] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts/")
  //       .then((res) => setPosts(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  const [clicked, setClicked] = useState(false);
  const changeTOLike = () => {
    setClicked(!clicked);
  };

  const d = new Date();
  let hour = d.getHours();
  const fetchData = () => {
    return axiosBaseURL.get("/comments").then((res) => res.data);
  };

  //React query
  const { isLoading, isError, data, error } = useQuery({
    queryKey: "userData",
    queryFn: fetchData,
  });

  if (isLoading) {
    return (
      <Box pl={10} pt={10}>
        <Typography variant="h5">Loading.....</Typography>
        <RefreshIcon sx={{ fontSize: 50 }} />
      </Box>
    );
  }

  if (isError) {
    return <Typography variant="h4">Errors: {error.message}</Typography>;
  }

  return (
    <Box sx={{ border: "1px solid #b0bec5" }}>
      <Box sx={{ display: "flex", border: "1px solid #b0bec5" }}>
        <Box pl={10}>
          <Typography variant="h6">For You</Typography>
        </Box>
        <Box pl={30}>
          <Typography variant="h6">Following</Typography>
        </Box>
        <Box pl={8} pt={0.5}>
          <SettingsIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex" }} ml={1} mt={1}>
        <img src={ShriRam} alt="ShriRam" width="40px"></img>
        <Box pl={1.5} pt={0.5}>
          <Typography variant="h6">What is happening?!</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }} pt={2} pl={7}>
        <Box>
          <PublicIcon sx={{ fontSize: 20, color: "#0288d1" }} />
        </Box>
        <Box>
          <Typography sx={{ color: "#0288d1" }} pl={0.5}>
            Everyone can reply
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          color: "#0288d1",
          //   border: "1px solid #b0bec5",
        }}
        pt={2.5}
        pl={7}
      >
        <Box>
          <ImageIcon />
        </Box>
        <Box pl={1.5}>
          <GifBoxIcon />
        </Box>
        <Box pl={1.5}>
          <PollIcon />
        </Box>
        <Box pl={1.5}>
          <SentimentSatisfiedAltIcon />
        </Box>
        <Box pl={1.5}>
          <TodayIcon />
        </Box>
        <Box pl={1.5}>
          <LocationOnIcon />
        </Box>

        <Box pl={30} pb={2} mr={1}>
          <Button variant="contained" size="small">
            Post
          </Button>
        </Box>
      </Box>
      <Box pl={28} pt={2} pb={2} sx={{ border: "1px solid #b0bec5" }}>
        <Link to={"#"}>Show all posts</Link>
      </Box>
      <Box pl={1} sx={{ border: "1px solid #b0bec5" }}>
        {data.map((user) => (
          <Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img src={ShreeRamJi} alt="ShreeRamJI" width="20px"></img>
              </Box>
              <Box pl={1}>
                <Typography variant="body1" fontWeight="bold" key={user.id}>
                  {user.name}
                </Typography>
              </Box>
              <Box pl={0.3}>
                <VerifiedIcon sx={{ fontSize: 20, color: "#0288d1" }} />
              </Box>
              <Box pl={0.6}>
                <Typography variant="body1">{user.email}</Typography>
              </Box>
              <Box pl={1}>
                <Typography>.{hour}h</Typography>
              </Box>
            </Box>
            <Box pl={4}>
              <Typography variant="body1">{user.body}</Typography>
            </Box>
            <Box pl={4} margin="1rem 1rem 0 0">
              <img src={Ramji} alt="Ramji" width="230px"></img>
              <img src={Mandir} alt="Mandir" width="230px"></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                color: "#78909c",
              }}
              pt={1}
              pb={1}
            >
              <ChatBubbleOutlineIcon
                sx={{ fontSize: 20, margin: "0.5rem 1rem 0.2rem 1.8rem" }}
              />
              <PostAddIcon
                sx={{ fontSize: 20, margin: "0.5rem 1rem 0.2rem 5rem" }}
              />
              <Button onClick={changeTOLike} sx={{ color: "#78909c" }}>
                {clicked ? (
                  <FavoriteIcon
                    sx={{
                      fontSize: 20,
                      margin: "0.5rem 1rem 0.2rem 5rem",
                      color: "#e91e63",
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{ fontSize: 20, margin: "0.5rem 1rem 0.2rem 5rem" }}
                  />
                )}
              </Button>

              <PollIcon
                sx={{ fontSize: 20, margin: "0.5rem 1rem 0.2rem 5rem" }}
              />

              <BookmarkBorderIcon
                sx={{ fontSize: 20, margin: "0.5rem 0rem 0.2rem 6rem" }}
              />
              <IosShareIcon
                sx={{ fontSize: 20, margin: "0.5rem 1rem 0.2rem 0rem" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Posts;
