import React from "react";
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import {
  Paper,
  Typography,
  CircularProgress,
  Icon
} from "@material-ui/core";
export default ({ video }) => {
  if (!video)
    return (
      <React.Fragment>
        <Paper
          elevation={6}
          style={{
            padding: "2em",
            textAlign: "center",
            width: "100%"
          }}
        >
          <YoutubeSearchedForIcon
            style={{ fontSize: "150", color: "#303f9f" }}
          />
          <div style={{ }}>Search to see your favourite videos!!</div>
        </Paper>
      </React.Fragment>
    );

  const videoSrc = `
  https://www.youtube.com/embed/${video.id.videoId}
  `;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "25%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};
