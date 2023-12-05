import React from 'react'
import Link from 'next/link'
import {linkArray} from './linkArray'
import ShowYoutubeVideos from '../components/youtube/ShowYoutubeVideos'
export default function More() {
  return (
    <section style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',

    }}>
        <div style={{
            margin: '1rem 0',
            alignSelf: 'center',
        }}>
        <h2 style={{
            color: 'rgb(94, 94, 3)',
        }}>Mehr Wissen</h2>
<p>über Tarifverträge</p>
        </div>

<h3>Externe Links:</h3>
<div style={{

}}>
{linkArray.map((link,index)=>{
return (<div 
    key={'link-'+index}
    style={{
    border: '0.4rem solid rgb(228, 230, 173)',
    borderRadius: '1rem',
    padding: '0.2rem',
    marginBottom: '0.2rem',
}}>
<Link href={link.link}>
<p style={{
          backgroundColor: 'rgb(228, 230, 173)',
          borderRadius: '1rem',
          padding: '1rem',  
        }}>{link.name}
            </p></Link><p>{link.company}</p>
</div>)
})}
</div>
<div style={{
    marginTop: '1rem'
}}>
    <h3>Lern Videos:</h3>
    <ShowYoutubeVideos />
</div>

    </section>
  )
}
