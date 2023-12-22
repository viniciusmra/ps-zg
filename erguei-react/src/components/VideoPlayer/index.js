import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';
const VideoPlayer = ({currentTime, updateTime}) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const opts = {
    height: '450',
    width: '800',
    playerVars: {
      showifo: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);  
  };

  const onPlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      console.log(isPlaying)
    }
  };

  const onSeek = (seconds) => {
    if (player) {
      player.seekTo(seconds);
    }
  };

  const onStateChange = (event) => {
    if (event.data === 1) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const onCurrentTimeChange = () => {
    if (player) {
      updateTime(player.getCurrentTime());
    }
  };

  useEffect(() => {
    if (player) {
      const timeChangeInterval = setInterval(onCurrentTimeChange, 100);

      return () => clearInterval(timeChangeInterval);
    }
  }, [player]);

  return (
    <div className='video-player'>
      <YouTube
        videoId="4uPtWYIP564"
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
        referrerPolicy="no-referrer-when-downgrade"
      />
      
      <div className='player-controls'>
        <button onClick={onPlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <input
          type="range"
          min={0}
          max={player ? player.getDuration() : 0}
          step={1}
          value={currentTime}
          onChange={(e) => onSeek(e.target.value)}
        />
        
        {parseInt(currentTime)}/{parseInt(player ? player.getDuration() : 0)}s
      </div>
    </div>
  );
};

export default VideoPlayer;