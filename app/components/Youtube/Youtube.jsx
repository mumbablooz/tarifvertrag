'use client'
import React from 'react'
import YouTube from 'react-youtube'

function Youtube({youtubeNr}) {
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return <YouTube videoId={youtubeNr} opts={opts} onReady={_onReady} />;

}

export default Youtube
 