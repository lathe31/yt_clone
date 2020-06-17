import React from "react";
import { Loader, Segment, Embed } from "semantic-ui-react";
import style from "./VideoDetails.module.css";

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div className="Loading">
        <Loader size="massive" active inline="centered">
          Loading
        </Loader>
      </div>
    );
  } else {
    return (
      <div className={style.videoContainer}>
        <Segment raised>
          <Embed
            placeholder={selectedVideo.snippet.thumbnails.medium.url}
            id={selectedVideo.id.videoId}
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
            defaultActive
            autoplay
            hd
          />
          <h4>{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo.snippet.description}</p>
        </Segment>
      </div>
    );
  }
};

export default VideoDetails;
