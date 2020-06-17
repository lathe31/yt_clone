import React from "react";
import style from "./VideoItem.module.css";
import { Segment, Image } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {
  const videoTitle = video.snippet.title;
  const thumbnailUrl = video.snippet.thumbnails.default.url;
  const channelName = video.snippet.channelTitle;
  //   const videoId = video.id.videoId;
  return (
    <div className={style.cardContainer} onClick={() => onVideoSelect(video)}>
      <Segment raised className="m3" color="grey">
        <div className={style.cardItemContainer}>
          <Image src={thumbnailUrl} size="small" alt={videoTitle} />
          <div className={style.details}>
            <p>
              <b>{videoTitle}</b>
            </p>
            <p>
              <b>Chanel:</b>
              {channelName}
            </p>
          </div>
        </div>
      </Segment>
    </div>
  );
};

export default VideoItem;
