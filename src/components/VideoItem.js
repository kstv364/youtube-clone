import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "-flex-box",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{
            marginRight: "20px",
            width: "100%",
            height: "100%"
          }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography
          variant="subtitle2"
          style={{ padding: "1em" }}
        >
          <span>
            <b>{video.snippet.title}</b>
          </span><br></br>
          <span>{video.snippet.description}</span>
        </Typography>
      </Paper>
    </Grid>
  );
};
