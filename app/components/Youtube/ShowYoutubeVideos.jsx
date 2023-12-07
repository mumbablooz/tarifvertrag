import React from 'react'
import Youtube from './Youtube'
import {infoArray} from '../../infoArray'
import styles from './styles.module.css'
export default function ShowYoutubeVideos() {
  return (
    <div style={{
        padding: '1rem',
        border: '0.4rem solid rgb(228, 230, 173)',
        borderRadius: '1rem',
    }}>
{infoArray.map((info,index)=>{
return (
    <div 
    key={'youtube-'+index}
    style={{
        display: 'flex',
        marginBottom: '1rem',
        padding: '0.2rem',
        borderBottom: '0.2rem solid rgb(228, 230, 173)',
    }}>
    <Youtube youtubeNr={info.youtube} />
     <div style={{
        marginLeft: '1rem'
     }}>
     <b className={styles.p}>{info.name}</b>
     <p className={styles.p}>von: {info.from}</p>
     </div>
    </div>
)
})}
    </div>
  )
}
