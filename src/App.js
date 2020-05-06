import React, { useState } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import {
  SearchBar,
  VideoDetail,
  VideoList,
  Navbar
} from "./components";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid
      style={{ justifyContent: "center" }}
      container
      spacing={10}
    >
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Navbar></Navbar>
          </Grid>
          <Grid item xs={12} style={{ padding : "0em 40px"}}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};
