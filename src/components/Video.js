import React, { useState } from "react";
import ReactPlayer from "react-player";
import videoArray from "../../src/assets/videos/videoArray";

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoArray[0]);

  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          url={selectedVideo}
          width="100%"
          height="100%"
          controls={true}
          className="react-player selected"
        />
      </div>
      <div className="thumb-container">
        {videoArray.map((vid, index) => (
          <video
            style={{ border: selectedVideo === vid ? "4px solid #fff" : "" }}
            key={index}
            src={vid}
            onClick={() => {
              setSelectedVideo(vid);
            }}
            className="vid-circle"
          ></video>
        ))}
      </div>
    </>
  );
};

export default Video;
