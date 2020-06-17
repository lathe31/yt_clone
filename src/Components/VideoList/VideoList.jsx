import React from "react";
import { Button } from "semantic-ui-react";
import style from "./VideoList.module.css";
import VideoItem from "./VideoItem/VideoItem";

const VideoList = ({ videos, onVideoSelect, onLoadMore, buttonLoading }) => {
  return (
    <div className={style.videoListContainer}>
      {videos.map((video) => {
        return (
          <div key={video.id.videoId}>
            <VideoItem video={video} onVideoSelect={onVideoSelect} />
          </div>
        );
      })}
      {videos.length > 0 && (
        <Button fluid onClick={onLoadMore} loading={buttonLoading}>
          Load More
        </Button>
      )}
      {/* <VideoItem /> */}
    </div>
  );
};

export default VideoList;
