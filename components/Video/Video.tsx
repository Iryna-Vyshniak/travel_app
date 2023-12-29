import React from 'react';

const Video = ({ src, width, height }: { src: string; width: string; height: string }) => {
  return (
    <video
      width={width}
      height={height}
      controls
      autoPlay
      muted
      loop
      className={`w-full h-full object-cover border-none`}
    >
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
