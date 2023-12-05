import React from 'react'

function Youtube({youtubeNr,youtubeEmbed}) {
  return (

    <iframe
    style={{
      borderRadius: '1em',
    }}
    src={'https://www.youtube.com/embed/'+youtubeNr} 
    title="YouTube video player"   
    allowFullScreen />


  )
}

export default Youtube