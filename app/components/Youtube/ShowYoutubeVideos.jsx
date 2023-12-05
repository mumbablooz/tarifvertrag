import React from 'react'
import Youtube from './Youtube'
import {infoArray} from '../../infoArray'

export default function ShowYoutubeVideos() {
  return (
    <div style={{
        padding: '1rem',
        border: '0.4rem solid rgb(228, 230, 173)',
        borderRadius: '1rem',
    }}>
{infoArray.map((info,index)=>{
return (
    <div style={{
        display: 'flex',
        marginBottom: '1rem',
        padding: '0.2rem',
        borderBottom: '0.2rem solid rgb(228, 230, 173)',
    }}>
    <Youtube
    key={'youtube-'+index}
     youtubeNr={info.youtube} />
     <div style={{
        marginLeft: '1rem'
     }}>
     <b>{info.name}</b>
     <p>von: {info.from}</p>
     </div>

    </div>
)
})}
    </div>
  )
}
