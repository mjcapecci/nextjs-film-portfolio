import React, { useState, useEffect } from 'react';
import useWindowSize from '../utils/useWindowSize';

const VideoEmbed = ({ videoLink }) => {
  const width = useWindowSize().width;
  const [embedSize, setEmbedSize] = useState(null);

  useEffect(() => {
    if (width > 1330) {
      setEmbedSize({ width: '617', height: '347' });
    } else if (width > 1200) {
      setEmbedSize({ width: '517', height: '290' });
    } else if (width > 970) {
      setEmbedSize({ width: '417', height: '234.5' });
    } else if (width > 730) {
      setEmbedSize({ width: '617', height: '347' });
    } else if (width > 605) {
      setEmbedSize({ width: '517', height: '290' });
    } else if (width > 490) {
      setEmbedSize({ width: '417', height: '234.5' });
    } else if (width > 250) {
      setEmbedSize({ width: '317', height: '178.2' });
    }
  }, [width]);
  return (
    <>
      {embedSize && (
        <span className='video-container'>
          <iframe
            width={embedSize.width}
            height={embedSize.height}
            src={videoLink.link}
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </span>
      )}
    </>
  );
};

const VideoGrid = ({ videoLinks }) => {
  return (
    <div className='video-grid-container'>
      <div className='video-grid'>
        {videoLinks.map((link) => {
          return <VideoEmbed videoLink={link} />;
        })}
      </div>
    </div>
  );
};

export default VideoGrid;
